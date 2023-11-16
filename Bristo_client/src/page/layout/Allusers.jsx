import { useQuery } from "@tanstack/react-query"
import useAxios from "../Hooks/useAxios";


const Allusers = () => {
    const Axioscicure =useAxios()

    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const data = await Axioscicure.get('/users');
          return data.data;
        },



    })

    const deletes = (id)=>{
          Axioscicure.delete(`/users/${id}`)
          .then(res => {
            refetch()
            console.log(res)
        })
 console.log(id)
    }
// admin make 
const handlemakeAdmin= (user)=>{
  Axioscicure.patch(`/users/admin/${user._id}`)
  .then(res => {
    console.log(res.data)
    if(res.data.modifiedCount>0){
 alert('admin update')
 refetch()
    }
  })
    console.log(user)

}

  return (
    <div >
     <div className="flex justify-evenly"> <h1 className='text-4xl'>all users</h1>
     <h1 className='text-4xl'>Total users : {data?.length}</h1></div>



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
           <th>Email</th>
           <th>Role</th>
           <th>Action</th>
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
                     
                   </div>
                   <div>
                     <div className="font-bold">{item.name}</div>
                    
                   </div>
                 </div>
               </td>
               <td>
                {item.email}
                 <br/>
                 
               </td>
               <td>{item.role==='admin'?'admin':<button  onClick={()=>handlemakeAdmin(item)}  className="btn btn-ghost btn-xs">view</button>} </td>
               <th>
                 <button onClick={()=>deletes(item._id)} className="btn btn-ghost btn-xs">delete</button>
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

export default Allusers
