import { useContext } from "react"
import { Authcontex } from "../privet/Authprovider"
import { useQuery } from "@tanstack/react-query"
import useAxios from "../Hooks/useAxios"


const History = () => {
    const Axioscicure =useAxios()
    const {user}=useContext(Authcontex)
    const {data}=useQuery({
        queryKey:['history',user?.email],
        queryFn:async()=>{
              const res = await Axioscicure.get(`/payments/${user.email}`)
              return res.data 
        }
    })
    console.log(data)
  return (
    <div><h1> Payments History</h1>
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
              {item.transectionId}
              <br/>
              <span className="badge badge-ghost badge-sm">{item.email}</span>
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

export default History