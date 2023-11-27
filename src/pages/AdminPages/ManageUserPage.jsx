import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageUser = () => {

 const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({ 
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/users`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

// Handle Delete role 
  const handleDelete = email => {
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

            axiosPublic.delete(`/users/${email}`)
                .then(() => {
                  toast.success('User deleted successfully')
                  refetch();
                   
                })
        }
    });
}

// Handle Make Creator Role
 const handleMakeCreator = (email, role) =>{
  if(role === 'creator'){
    return toast.error('User Already creator')
  }
        axiosPublic.patch(`/users/${email}`, {role: 'creator'})
        .then(res =>{
            console.log(res.data)
            toast.success('Make creator successfully')
            refetch();
           
        })
        .catch(err =>{
            console.log(err)
        })
    }



  return (
    <>
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
              <th> Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              const {name, email, image, role} = user;
              console.log(user);

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
                    <td>{email}</td>
                    <td> <button onClick={()=>handleMakeCreator(email)} className={`btn btn-xs ${role === 'creator' ? 'bg-green-500 btn-sm' : 'bg-red-100'}`}>{role === 'creator' ? 'Creator' : 'make creator'} </button> </td>
                    <th>
                      <button onClick={()=>handleDelete(email)}  className="btn btn-error btn-xs">Remove</button>
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

export default ManageUser;
