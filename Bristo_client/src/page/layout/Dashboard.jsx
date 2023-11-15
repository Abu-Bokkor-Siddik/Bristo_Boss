import { NavLink, Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div className="flex max-w-6xl mx-auto my-16">
      <div className="w-64 min-h-full flex flex-col bg-orange-400">
      


      <NavLink to="/dashboard/user">User Home</NavLink>
      <NavLink to="/dashboard/reservation"> Reservation</NavLink>
      <NavLink to="/dashboard/card">Payment</NavLink>
      <NavLink to="/dashboard/card"> My Card</NavLink>
      <NavLink to="/dashboard/card">Add Review</NavLink>
      <NavLink to="/dashboard/card">My Booking</NavLink>
      <div className="divider">OR</div>

      <NavLink className='' to='/'>Home </NavLink>
      <NavLink to='/contact'>Contacts </NavLink>
      
      <NavLink to='/menu'>Our Menu </NavLink>
      <NavLink to='/order/Salad'>Order Shop </NavLink>
      
      </div>

      <div className="flex-1">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
