
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Authcontex } from '../page/privet/Authprovider'
import { BsCart4  } from 'react-icons/bs';
import useTanstack from '../page/Hooks/useTanstack';
import { useQuery } from '@tanstack/react-query';

const Navbar = () => {
  const {user,logout}=useContext(Authcontex)
  const handlOut=()=>{
     logout()
     .then(res => console.log(res))
     .catch(err => console.log(err))
  }

  // tanstack use 
  


  // const {data,refetch } = useQuery({
  
  //   queryKey: ['carts',user?.email],
  //   queryFn: () =>
  //     fetch(`http://localhost:3000/carts?email=${user.email}`).then(
  //       (res) => res.json(),
  //     ),
  // })

  // user?.email 
  // diye dite pari 

  
const{data,refetch}=useTanstack()
 console.log(data,'here')
// console.log('data length is here',data?.length)
  return (
    <div className=''>
    <div className="drawer fixed z-20 text-white  ">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-[1500px] navbar  bg-black opacity-60 ">
  
      {/**navbar 1500px */}
      <div className=' w-full max-w-[1500px] mx-auto '>
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="flex-1 px-2 mx-2">BISTRO BOSS <p>Restaurant</p></div>
        <div className="flex-none hidden lg:block">
          <div className="menu menu-horizontal z-30">
            {/* Navbar menu content here */}
  
            <div className='flex gap-3 justify-center items-center  '>
            <NavLink className='' to='/'>Home </NavLink>
            <NavLink to='/contact'>Contacts </NavLink>
            <NavLink to='/dashboard'>DASHBOARD</NavLink>
            <NavLink to='/menu'>Our Menu </NavLink>
            <NavLink to='/order/Salad'>Order Shop </NavLink>
           {
            user ?  <NavLink ><button onClick={handlOut} className='btn btn-neutral'>Log Out</button></NavLink>: <NavLink to='/login'>Login</NavLink>


           }
           <button className="btn">
           <BsCart4></BsCart4>
          <div className="badge badge-secondary">{data?.length}</div>
</button>

            {/** <NavLink to='/order/salad'>Order Shop </NavLink> */}
           
            </div>
          </div>
        </div>
  {/**end */}
        </div>
      </div>
      {/* Page content here */}
      
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <div className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <div className='flex flex-col gap-2'>
        
            <NavLink className='' to='/about'>About </NavLink>
            <NavLink to='/contact'>Contact </NavLink>
            <NavLink to='/login'>Login </NavLink>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Navbar
