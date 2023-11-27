
import StyledButton from "../../components/shared/StyledButton";
import {Link} from "react-router-dom"

// const HoverDevCards = ({contest}) => {
//     const { title , description , attempted , image } = contest
//   return (
//     <div className="p-4">
//       <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
//         <Card
//           title={title}
//           description={description}
//         />
//       </div>
//     </div>
//   );
// };

const Card = ({ contest }) => {
  const { description, image, instruction, name, price, prize, attempted, _id } = contest;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="w-full  rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white p-5 bg-cover bg-center bg-no-repeat py-20 "
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#993922] to-[#FBB464] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <h3 className="  text-white group-hover:text-black relative z-10 duration-300 text-2xl mb-5 font-bold ">
        {name}
      </h3>
      <p className="text-[#993922] group-hover:text-violet-200 relative z-10 duration-300">
        {description}
      </p>
      <div className=" text-white flex justify-between items-center mt-10">
        <p className="text-slate-200 group-hover:text-violet-200 relative z-10 duration-300">
          Total Attempted:{" "}
          <span className="text-[#993922] font-extrabold btn btn-xs">
            {attempted || "0"}
          </span>
        </p>
        {/* <button className="btn text-slate-200 bg-[#993922] group-hover:text-black relative z-10 duration-300 hover:bg-[#FBB464]">
          View Details
        </button> */}

        <Link to={`/allcontest/${_id}`} className=" rounded-full bg-[#993922]  group-hover:text-black relative z-10 duration-300 cursor-pointer ">
          <StyledButton text={"vew details"}></StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default Card;
