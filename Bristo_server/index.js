const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
const stripe =require('stripe')(process.env.STRIPE_SCIRET)
const jwt =require('jsonwebtoken')
const port = process.env.PORT || 3000
 app.use(express.json())
 app.use(cors())


console.log(process.env.DB_NAME)
console.log(process.env.DB_PASS)


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.kkqbu90.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const menuCollection = client.db("bristoDB").collection("menu");
    const cartCollection = client.db("bristoDB").collection("cart");
    const userCollection = client.db("bristoDB").collection("user");
    const paymentCollection = client.db("bristoDB").collection("payments");


    // console.log(process.env.ACCESS_TOKEN_SECRET)
    // jwt related api 

    app.post('/jwt',async(req,res)=>{
      const user = req.body
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10h'});
    res.send({token})

    })

    // user realeted api 
    app.post('/users',async(req,res)=>{

      const user = req.body;
      // dublicate user ke bad dibo 
      const query={email:user.email}
      const exsixting = await userCollection.findOne(query)
      if(exsixting){
        return res.send({message:'user already exist ',insertedId : null})
      }

      const result = await userCollection.insertOne(user)
      res.send(result);
    })
// middlewares 
const verifyToken= (req,res,next)=>{
  console.log('inside token authorization',req.headers.authorization)
  if(!req.headers.authorization){
    return res.status(401).send({message:'unathorize error'})
  }
  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
  if(err){
    return res.status(403).send({message:'unathorize error'})
  }
  req.decoded = decoded;
  next()
  })

  // next()
}

// verify admin 
const verifyAdmin = async (req,res,next)=>{
  const email = req.decoded.email;
  const query={email:email}
  const user = await userCollection.findOne(query)
  const isAdmin = user?.role==='admin';
  if(!isAdmin){
    return res.status(403).send({message:'unathorize error'})
  }
  next()
}

    app.get('/users',verifyToken,verifyAdmin,async(req,res)=>{
      
     const result = await userCollection.find().toArray()
     res.send(result)
    })


    // find admin or verify admin 
    app.get('/users/admin/:email',verifyToken,async(req,res)=>{
  const email =req.params.email;
  if(email !==req.decoded.email){
    return res.status(403).send({message:'unathorize error'})
  }
  const query ={email:email}
  const user = await userCollection.findOne(query)
  let admin = false;
  if(user){
    admin = user?.role ==='admin';

  }
  res.send({admin})

    })
    // delete user for all user .....route 
    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id 
      const query ={_id:new ObjectId(id)}
      const result = await userCollection.deleteOne(query);
      res.send(result)
    })
    // i want to putch admit so i call an api 
    app.patch('/users/admin/:id',async(req,res)=>{
      const id = req.params.id 
      const filter = {_id :new ObjectId(id)}
      const updateDoc = {
        $set: {
         role:'admin'
        },
      }
      const result = await userCollection.updateOne(filter, updateDoc)
      res.send(result)
    })
// post method  and carts collection 
    app.post('/carts',async(req,res)=>{
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem)
      res.send(result)
    })
    app.get('/carts',async(req,res)=>{
      const email=req.query.email 
      const query={email:email};
      console.log(email)
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })

    // menu collection
    app.get('/menu',async(req,res)=>{
        const result = await menuCollection.find().toArray()
        res.send(result)
    })
    // menu post 
    app.post('/menu',verifyToken,verifyAdmin,async(req,res)=>{
      const menuitems = req.body
      const result = await menuCollection.insertOne(menuitems)
      res.send(result)
    })

    // payment intence here all payment stystem is here ...
    app.post('/create-payment-intent',async(req,res)=>{
      const {price}=req.body;
      console.log(price,'price here')
      const amount = parseInt(price*100)
      console.log(amount,'here total value')
      const paymentIndent=  await stripe.paymentIntents.create({
        amount:amount,
        currency:'usd',
        payment_method_types:['card']
      })
      res.send({
        clientSecret:paymentIndent.client_secret
      })
    })

    // store data form client 
    app.post('/payments',async(req,res)=>{
    try{
      const payment =req.body 
      const payresult = await paymentCollection.insertOne(payment)
      console.log('payment result ',payment)
      const query={_id:{
        $in:payment.cardId?.map(id=>new ObjectId(id))
      }};
      const deleteResult = await cartCollection.deleteMany(query)
      
      res.send({payresult,deleteResult})
    }catch(err){
      console.log(err.message,'error message')
    }
    })
    // get payment history 
    app.get('/payments/:email',async(req,res)=>{
 const query={email:req.params.email}
 const result = await paymentCollection.find(query).toArray()
 res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})