
import React, {  useState } from 'react';
import EditFoodModal from "./EditFoodModal"

import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../ApiHook/axiosInstance';
const TableBody = ({data,mydata,setMydata}) => {
  const{user}=useAuth();
  const axiosSecure=useAxiosSecure()
  console.log(data)
  const handleDelete=(_id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
axiosSecure.delete(`/foods/${_id}?email=${user.email}`,{
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then(res=>{
        if(res.data.deletedCount){
Swal.fire({
      title: "Deleted!",
      text: "Your food itam has been deleted.",
      icon: "success"
    });
   const remaining = mydata.filter(item => item._id !== _id);
    setMydata(remaining)
        }
      })
    
  }
});

  }
     const [selectedFoodItem, setSelectedFoodItem] = useState(null);
       const [isModalOpen, setIsModalOpen] = useState(false);
    
   
    return (
       <>
            <tbody className='border-b-2 border-gray-200'>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={data.foodImage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"></div>
              <div className="text-sm opacity-50">{data.foodTitle}</div>
            </div>
          </div>
        </td>
        <td>
         {data.category}
        </td>
        <td>{data.quantity}</td>
        <th>
          <button   onClick={() => {
    setSelectedFoodItem(data);
    setIsModalOpen(true);
  }}
          className="btn bg-blue-500 btn-ghost btn-xs">Edite</button>
        </th>
        <th>
            <button onClick={()=>handleDelete(data._id)} className="btn bg-red-500 btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    </tbody>
    <EditFoodModal
     isOpen={isModalOpen}
     foodItem={selectedFoodItem}
                onClose={() => setIsModalOpen(false)}
    >

    </EditFoodModal>
      </> 
    );
};

export default TableBody;
