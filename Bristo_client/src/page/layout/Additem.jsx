import axios from "axios";
import useAxiosP from "../Hooks/useAxiosP";
import { imgUpload } from "../../utils/utils";
import useAxios from "../Hooks/useAxios";

const Additem = () => {
  const VITE_IMG_KEY=import.meta.env.VITE_IMG_KEY
  const IMG_API =`https://api.imgbb.com/1/upload?key=${VITE_IMG_KEY}`
  const axiosp =useAxiosP()
  const Axioscicure =useAxios()
  const handel = async(e)=>{
    
    e.preventDefault()
      const name = e.target.title.value 
      const price = e.target.mark.value 
      const recipe = e.target.description.value 
      const selet = e.target.cars.value 
      const image = e.target.image.files[0]
      // const res = await axios.post(IMG_API,image,{
      //   headers:{
      //     'content-type':'multipart/form-data'
      //   }
      // })
      // console.log('data come form imgbb',res.data)



      // *********** hooks
      const data = await imgUpload(image)
      console.log(data.success)
        if(data.success){
          const menuItem ={
            name,
            recipe,
            image:data?.data?.display_url,

            category:selet,
            price:parseFloat(price)
          }
          console.log('menuitem data',menuItem)
          const menudata = await Axioscicure.post('/menu',menuItem)
          .then(menudat =>{ 
            if(menudat.data?.insertedId){
              alert('added menu item')
            }
            console.log(menudat.data,'database a post')})
          

        }


      // onek bar call korte hobe ar jonno hook banate hobe... utiles js
      // const formData = new FormData()
      // formData.append('image',image)
      // try{
      //   const{data}=await axios.post(IMG_API,formData)
      //   console.log(data)

      // }catch(err){
      //   console.log(err)
      // }
      // console.log(name,price,recipe,selet,image)

  }
  // console.log('api',VITE_IMG_KEY)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0  shadow-2xl bg-slate-100 w-auto ">
            <form onSubmit={handel} className="card-body ">
              <p className="text-center text-3xl">Create Assignment</p>

              <div className="grid grid-cols-2 w-auto gap-6 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recipe name</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    name="mark"
                    type="text"
                    placeholder="mark"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recipe Details</span>
                  </label>
                  <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    className="input input-bordered"
                    required
                  />
                </div>
               
                <div className="form-control">
                  <label className="h-auto">Category</label>
                  <select name="cars" id="cars">
                    <option value="dessert">Dessert</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="offered">Offered</option>
                    <option value="salad">Salad</option>
                  </select>
                </div>
              </div>

              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="file"
                placeholder="Image"
                className="input input-bordered"
                required
              />

              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additem;
