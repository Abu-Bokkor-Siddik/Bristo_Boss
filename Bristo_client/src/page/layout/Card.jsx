import { Link } from "react-router-dom"
import useTanstack from "../Hooks/useTanstack"


const Card = () => {
    const{data,refetch}=useTanstack()
    console.log(data)
    const totalP= data?.reduce((total,item)=> total+item.price,0)
  return (
    <div>
      <div className="flex gap-10">
      <h1 className="text-4xl">Total card {data?.length}</h1>
      <h1 className="text-4xl">Total price {totalP}</h1>
    {data.length?<Link to='/dashboard/payment'> <button className="btn btn-neutral">pray </button></Link>:<button  disabled className="btn btn-neutral">pray </button>}
      
      </div>




      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        data?.map((item,index) =>  <tr key={item._id}>
            <th>
             {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image}alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
     }
      {/* row 2 */}
      
    </tbody>
    
    
  </table>
</div>
    </div>
  )
}

export default Card
