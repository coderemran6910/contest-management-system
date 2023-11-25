import { AuthContext } from "../provider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import MainLayout from "./MainLayout";
import { toast } from "react-toastify";
import bg from '../assets/commonbg.png'

const AdminLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
      })
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="min-h-screen bg-cover bg-center">
      <MainLayout>
        <div  className="grid grid-cols-12 w-full max-w-7xl mx-auto gap-10 mt-5">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 bg-[#D1A054] md:h-screen rounded-xl px-5">
            <div className="md:sticky top-0 md:block">
              {/* Content */}
              <div className="flex flex-col items-center">
                <div className="modal-box flex flex-col justify-center items-center text-center">
                  <div className="avatar cursor-pointer">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt="User Avatar" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-5">{user?.displayName}</h3>
                  <strong className="mt-5 text-sm">{user?.email}</strong>
                  <button onClick={handleLogOut} className="btn btn-error mt-5">
                    Log Out
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center md:px-5">
              <NavLink className="btn bg-black w-full mt-5 text-slate-300 font-bold" to={'/profile'}>
                  Add Food
                </NavLink>
                <NavLink
                  className="btn bg-black w-full mt-5 text-slate-300 font-bold"
                  to={`/profile/myfoods/${user.email}`}
                >
                  Uploaded Foods
                </NavLink>
                <NavLink
                  className="btn bg-black w-full mt-5 text-slate-300 font-bold"
                  to={`/profile/orders/${user?.email}`}
                >
                  My Order
                </NavLink>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 bg-[#FBB464]  rounded-xl md:px-5 py-5">
            <Outlet></Outlet>{" "}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default AdminLayout;
