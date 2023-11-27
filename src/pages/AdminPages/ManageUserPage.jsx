import { Link } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ManageUser = () => {

 const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
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
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                    </td>


                    <td>{name}</td>
                    <td>{email}</td>
                    <td>Creator</td>
                    <th>
                      <Link className="btn btn-error btn-sm">Remove</Link>
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
