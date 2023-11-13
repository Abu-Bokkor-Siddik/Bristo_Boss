import { useForm } from "react-hook-form"
import sign from '../../assets/others/authentication2.png'
import { useContext } from "react"
import { Authcontex } from "../privet/Authprovider"



const SignIn = () => {
  const{regisster}=useContext(Authcontex)
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    console.log(data)
    regisster(data.email,data.password)
    .then(res => {
      const users = res.user
console.log(users)  
  }
      )
      .then()
  }
   

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img src={sign} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <h1 className='text-3xl text-center'>Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} name='name' type="text" placeholder="Name" className="input input-bordered" required />
          {errors.name && <span>This field is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email")} name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password",{ required: true , maxLength: 20 ,minLength:6})} type="password" placeholder="password" className="input input-bordered"  />
         
          {errors.password?.type === "required" && (
            <p>PASSWORD is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p >password must 6 number is required</p>
          )}
          
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default SignIn