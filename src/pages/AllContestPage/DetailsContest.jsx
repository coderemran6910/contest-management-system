import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import bf from "../../assets/admin.png";
import StyledButton from "../../components/shared/StyledButton";
const DetailsContest = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);

  const { data: contest = {} } = useQuery({
    queryKey: ["singleContest", id],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/contests/${id}`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const {
    description,
    image,
    instruction,
    name,
    price,
    prize,
    type,
    attempted,
  } = contest;
  return (
    <div style={{ backgroundImage: `url(${bf})` }} className=" pb-20 bg-cover ">
         <div
            className="hero h-[70vh]"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl flex flex-col justify-center items-center space-y-10 ">
                <h1 className="mb-5 text-5xl font-bold text-[#FBB464]"> More About  {name} </h1>
                <p className="mb-5">
                  {description}
                </p>
                <StyledButton text={"Register Now"}></StyledButton>
              </div>
            </div>
          </div>



      <div className="hero min-h-screen">
        <div className=" ">
          {/* Banner   */}
          {/* <div className=" w-94 lg:w-1/2 rounded-lg shadow-2xl"><img src={image} className="rounded-lg" /></div> */}
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 bg-opacity-30 p-5 ">
            <h1 className="text-5xl font-bold">
              Contest Name: <span className="text-[#2a3000]">{name}</span>{" "}
            </h1>
            <p className="py-6">{description}</p>
            <p className="py-6 text-xl font-bold">Price: ${price}</p>
            <p className="py-6 text-lg">Attempted: {attempted}</p>
            <p className="py-6">Instruction: {instruction}</p>
            <p className="py-6">
              Type: <span className=" text-bold">{type}</span>
            </p>
           <div className="flex justify-between ">
           <p className="py-6">
              contest Prize{" "}
              <span className="text-red-400 text-xl">{prize}</span>
            </p>
            <StyledButton text={"Register Now"}></StyledButton>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContest;
