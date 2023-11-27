import { Link } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {

 const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["singleContest"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/users`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });


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
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
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
              const {name, email, image} = user;
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
                    <td>Make Creator</td>
                    <th>
                      <button onClick={()=>handleDelete(email)}  className="btn btn-error btn-sm">Remove</button>
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
