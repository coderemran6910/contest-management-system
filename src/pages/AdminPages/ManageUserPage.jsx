import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const ManageUser = () => {
  const myOrder = useLoaderData();
  const [reminingOrder, setReminingOrder] = useState(myOrder);

  // const handleDelete=(id)=>{
  //   axios.delete(`https://restaurent-server.vercel.app/api/v1/orders/${id}`)
  //   .then((res)=>{
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Product delete success",
  //       showConfirmButton: true,
  //     })

  //     const filterOrder = myOrder.filter(order=> order._id !== id);
  //     setReminingOrder(filterOrder);

  //   })
  //   .catch(err=> console.log(err))
  // }

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
              <th>Products</th>
              <th> Name</th>
              <th> Product id </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reminingOrder?.map((order) => {
              const { _id, name, buyerName, buyerEmail, image } = order;
              console.log(order);

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
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{name}</div>
                          <div className="text-sm opacity-50">{buyerEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td>{buyerName}</td>
                    <td>{_id}</td>
                    <th>
                      <Link className="btn btn-error btn-sm">Delete</Link>
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
