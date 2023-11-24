import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/shared/SectionTitle";
import SliderBestCreator from "./SliderBestCreator/SliderBestCreator";
import bg from "../../assets/creator.svg";

const BestCreator = () => {
  const { data: bestCreator = [] } = useQuery({
    queryKey: ["bestCreator"],
    queryFn: async () => {
      const res = await fetch("/BestCreator.json");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-cover bg-center flex justify-center h-screen items-center "
    >
      <div>
        <SectionTitle
          title={"Champions of Contest Creation"}
          subTitle={
            "Step into the world of visionary creators! Our gallery unveils the genius behind exceptional contests, featuring top creators and their captivating competitions."
          }
        ></SectionTitle>

        <div>
          <SliderBestCreator bestCreator={bestCreator}></SliderBestCreator>
        </div>
      </div>
    </div>
  );
};

export default BestCreator;
