import React, {  useEffect, useState } from 'react';
import TableBody from './TableBody';
import SkeletonTableRow from '../../Components/Skeleton/SkeletonTableRow';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import useAuth from '../../hook/useAuth';
const MyAddFood = () => {
  const {user}=useAuth()
 const [loading,setLoading]=useState(true)
  const[mydata,setMydata]=useState([])
  const axiosSecure=useAxiosSecure()
  
  useEffect ( ()=>{
    if (!user?.email ) return;
    axiosSecure.get(`/foods/user/${user?.email}`)
    .then(res=>{
      setMydata(res.data)
      setLoading(false)
    })
  },[user,setMydata,axiosSecure])
  console.log(mydata)
    return (
      <>
  <div>
    <div className="overflow-x-auto mt-5 mb-6 w-12/12 mx-auto border rounded-lg shadow-md">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        {loading ? (
          <>
            {[...Array(5)].map((_, i) => (
              <SkeletonTableRow key={i} />
            ))}
          </>
        ) : (
          mydata?.map(data => (
            <TableBody
              key={data._id}
              data={data}
              mydata={mydata}
              setMydata={setMydata}
            />
          ))
        )}
      </table>
    </div>
  </div>
</>

    );
};

export default MyAddFood;