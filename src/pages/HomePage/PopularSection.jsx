import SectionTitle from "../../components/shared/SectionTitle";
import useCarts from "../../hooks/useCart";
import TiltCard from "../HomePage/CardPopular";
import bg from "../../assets/popular/bg.svg";

const PopularSection = () => {
  const [popular] = useCarts();
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-cover bg-center opacity-100   py-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Popular Contest"
          subTitle="Explore Our Popular Contest"
        ></SectionTitle>

        <div className="">
          {popular.map((popular, indx) => (
            <TiltCard key={indx} popular={popular}></TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
