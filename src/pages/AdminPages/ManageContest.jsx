import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageContest = () => {

 const axiosPublic = useAxiosPublic();

  const { data: contests = [], refetch } = useQuery({ 
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/contests`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

// Handle Delete role 
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e5e218",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosPublic.delete(`/contests/${id}`)
                .then(() => {
                  toast.success('COntest deleted successfully')
                  refetch();
                   
                })
        }
    });
}

// Handle Make Creator Role
 const handleConfirm = (_id, status) =>{
  if(status === 'confirmed'){
    return toast.error('User Already Confirmed')
  }
        axiosPublic.patch(`/contests/${_id}`, {status: 'confirmed'})
        .then(res =>{
            console.log(res.data)
            toast.success('Contest confirmed successfully')
            refetch();
           
        })
        .catch(err =>{
            console.log(err)
        })
    }



  return (
    <>
    <div>
        <h2 className="text-3xl text-center font-bold my-5 ">
          Total Contest: {contests?.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        {/* <Title>My {myOrder?.length} Orders</Title> */}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th> Name</th>
              <th> Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contests?.map((contest) => {
              const {name, image, price, _id , status} = contest;
              console.log(contest);

              {
                /* row 1 */
              }
              return (
                <>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            {image? <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          :
                          <span > < FaUser className=" w-full h-full  "></FaUser> </span>
                          }
                          </div>
                        </div>
                    </td>


                    <td>{name}</td>
                    <td>{price}</td>
                    <td> <button onClick={()=>handleConfirm(_id)} className={`btn btn-xs ${status === 'confirmed' ? 'btn-success' : ' bg-red-100'}`}>  {status === 'confirmed' ? 'confirmed' : 'confirm'} </button> </td>
                    <th>
                      <button onClick={()=>handleDelete(_id)}  className="btn btn-error btn-xs">Remove</button>
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageContest;
