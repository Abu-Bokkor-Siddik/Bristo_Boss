import { useEffect, useRef, useState } from 'react';
import loginImg  from '../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';

const Login = () => {
  const capchaRef = useRef(null)
  const [desable,setdesable]=useState(true)
  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])


  const handel = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
  }


  const handelValidateCaptcha=()=>{
 const user_captcha_value =capchaRef.current.value;
 console.log(user_captcha_value)
 if(validateCaptcha(user_captcha_value)){
setdesable(false)
 }
  }
  return (
    <div className="max-w-[1500px] mx-auto">
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
       <img src={loginImg} alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handel} className="card-body">
        <h1 className='text-3xl text-center font-bold'>Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered"  />
          </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


          <div className="form-control">
            <label className="label">

            <LoadCanvasTemplate />

            </label>
            <input ref={capchaRef} name='captcha' type="text" placeholder="type captcha" className="input input-bordered" required />
            <button onClick={handelValidateCaptcha} className='btn btn-neutral btn-xs'>Validation</button>
            
          </div>



         
          <div className="form-control mt-6">
            <button disabled={desable} type='submit' className="btn btn-primary">Sign up</button>
          </div>
        </form>
        <p className='text-center'>New here?<Link className='text-blue-800' to='/regi'> Create a New Account</Link></p>
        <p  className='text-center my-5'>Or sign in with</p>
        <div className='flex justify-center items-center gap-10 my-5'><button className='btn btn-neutral'>Fb</button><button className='btn btn-neutral'>G</button><button className='btn btn-neutral'>Git</button></div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login