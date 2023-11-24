import Banner from "./Banner";
import BestCreator from "./BestCreator";
import PopularSection from "./PopularSection";
import WinnerSection from "./WInnerSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularSection></PopularSection>
      <WinnerSection></WinnerSection>
      <div>
        <BestCreator></BestCreator>
      </div>
    </div>
  );
};

export default Home;
