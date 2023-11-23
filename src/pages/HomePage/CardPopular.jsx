
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import StyledButton from "../../components/shared/StyledButton";

// const CardPopular = ({ popular }) => {
//     const { title , image } = popular;
//   return (
//     <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
//       <TiltCard popular={popular}/>
//     </div>
//   );
// };

const TiltCard = ({popular}) => {
    const { title , image, description, participantCount } = popular;


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
   <>
   <div className="flex  items-center my-10">
   <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-96 rounded-xl bg-gradient-to-br from-[#FFA439] to-[#993922] mr-20"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#FBB464] shadow-lg"
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <img src={image} alt="" className="object-cover w-full h-full" />
        </p>
      </div>
      
    </motion.div>

<div className="bg-[#FBB464] w-full p-10 bg-opacity-30 rounded-lg">
<h3 className="text-3xl text-white font-bold ">{title}</h3>
<p className="text-lg py-2 text-slate-300"> {description} </p>
<div className="flex justify-between items-center">
<strong className="text-lg text-slate-50">Attempted count:  {participantCount}</strong>
<StyledButton  text={"View More"}></StyledButton>
</div>
</div>
   </div>
   <hr />
   </>
  );
};

export default TiltCard;