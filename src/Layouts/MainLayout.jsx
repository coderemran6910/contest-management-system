import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfieDropdown from "../components/utility/ProfieDropdown";
import { toast } from "react-toastify";
import { FaAllergies, FaArrowRight, FaChevronLeft, FaHome, FaListAlt } from "react-icons/fa";

const MainLayout = ({ children }) => {

  const handleLogOut = () => {
    logOut()
    .than(() => {
      toast.success('Log out successfully')
    })
  }

  const { logOut, user } = useAuth();
  

  const menu = (
    <>
      <NavLink className="btn btn-ghost text-xl " to={"/"}>
       <FaHome /> Home
      </NavLink>
      <NavLink className="btn btn-ghost text-xl " to={"/allcontest"}>
       <FaListAlt /> All Contest
      </NavLink>
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-error text-xl">
           <FaChevronLeft /> log out
          </button>
        </>
      ) : (
        <>
          <NavLink className="btn btn-ghost text-xl " to={"/login"}>
           <FaArrowRight /> Login
          </NavLink>
        </>
      )}

    
        <ProfieDropdown></ProfieDropdown>
     
    </>
  );






 

  return (
    <div className="drawer">
      <title>Home Page </title>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="w-full navbar bg-black text-white py-5">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* Logo */}
            <div className="flex-1 px-2 text-right lg:text-left text-3xl font-extrabold ">
              <span className="bg-[#FBB464] text-black py-5  w-16 h-16 rounded-full text-4xl">
                C
              </span>
              <span className=" tracking-wide border-b-2 text-[#993922] border-[#993922] ">
                ontest
              </span>
            </div>

            <div className="flex-none hidden lg:block">
              <div className="menu menu-horizontal flex gap-10 justify-end items-center ">
                {menu}
              </div>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side " style={{ zIndex: 3 }}>
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <div className="menu p-4 w-52 md:w-80  min-h-full  flex flex-col items-center gap-5 bg-[#993922]  text-white  font-bold text-2xl">
          {/* Sidebar content here */}
          {menu}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
