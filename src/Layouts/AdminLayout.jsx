import { NavLink, Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";
import bg from '../assets/commonbg.png'
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";


const AdminLayout = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
const [users, setUsers] = useState()




useEffect(() => {
  axiosPublic.get('/users')
  .then(res => {
    setUsers(res.data)
  })

},[axiosPublic])
const currentUser = users?.find(u => u?.email === user?.email)
console.log(currentUser);


  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="min-h-screen bg-cover bg-center">
      <MainLayout>
        <div  className="grid grid-cols-12 w-full max-w-7xl mx-auto gap-10 mt-5">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 bg-[#D1A054] md:h-screen rounded-xl px-5">
            <div className="md:sticky top-0 md:block">
              {/* Content */}
              
              {/* <div className="flex flex-col items-center">
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
              </div> */}

              <div className="flex flex-col items-center md:px-5">
                {
                  currentUser?.role === 'admin' && <>
                   <NavLink className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]" to={'/admin'}>
                   My Profile
                 </NavLink> 
                  
                  <NavLink className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]" to={'/admin/addcontest'}>
                   Add Contest
                 </NavLink> 
                 <NavLink
                   className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]"
                   to={`/admin/manageuser`}
                 >
                   Manage User
                 </NavLink>
                 <NavLink
                   className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]"
                   to={`/admin/managecontest`}
                 >
                  Manage Contest
                 </NavLink>
                 </>
                } 
                 {
                  currentUser?.role === 'creator' && <>
                   <NavLink className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]" to={'/admin'}>
                   My Profile
                 </NavLink> 
                  
                  <NavLink className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]" to={'/admin/addcontest'}>
                   Add Contest
                 </NavLink> 
                 <NavLink
                   className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]"
                   to={`/admin/manageuser`}
                 >
                   Manage User
                 </NavLink>
                 <NavLink
                   className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]"
                   to={`/admin/managecontest`}
                 >
                  Manage Contest
                 </NavLink>
                 </>
                } 
                
                {
                  currentUser?.role === 'user' && <>
                   <NavLink className="btn btn-sm border-0 bg-black w-full mt-5 text-slate-300 font-bold hover:bg-[#2f281e]" to={'/admin'}>
                   My Profile
                 </NavLink> 
                  </>
                }            
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
