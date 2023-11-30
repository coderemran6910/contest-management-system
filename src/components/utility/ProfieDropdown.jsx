import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const ProfieDropdown = () => {

  const { user , logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
      })
  };



  return (
    <div className="dropdown ">
      <label tabIndex={0} className="">
        <div className="avatar  cursor-pointer">
          <div className="w-16 mask mask-hexagon">
            <img
              src={
                user?.photoURL ||
                "/user.png"
              }
            />
          </div>
        </div>
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-64 p-2 shadow  text-primary-content"
      >
        {/* <div>
          <div className="modal-box flex flex-col justify-center items-center">
            <div className="avatar cursor-pointer">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src={user?.photoURL ||  "https://w7.pngwing.com/pngs/410/884/png-transparent-computer-icons-facebook-user-profile-facebook-black-silhouette-avatar-thumbnail.png"} alt="User Avatar" />
              </div>
            </div>
            <h3 className="text-lg font-bold mt-5">Name : {user?.displayName }</h3>
            <strong className="mt-5">Email: {user?.email}</strong>
            <Link to={"/admin"}>
              <button className="btn btn-success mt-5">View Profile</button>
            </Link>
            <button className="btn btn-error mt-5 ">Log Out</button>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </div> */}
        <div className="flex flex-col items-center">
          <div className="modal-box flex flex-col justify-center items-center text-center">
            <div className="avatar cursor-pointer">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </div>
            <h3 className="text-xl text-black font-bold mt-5">{user?.displayName}</h3>
            <strong className="mt-5 text-slate-700 text-sm">{user?.email}</strong>
            <Link className="w-full" to={"/admin"}>
              <button className="btn btn-success mt-5 w-full">View Profile</button>
            </Link>
            <button onClick={handleLogOut} className="btn btn-error mt-5 w-full ">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfieDropdown;
