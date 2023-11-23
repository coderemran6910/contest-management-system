import bannerVideo from "../../assets/video2.mp4";
import animated from "../../assets/home.json";
import Lottie from "lottie-react";
import SearchBar from "../../components/shared/SearchBar";
const Banner = () => {
  return (
    <div className="relative">
      <video
        src={bannerVideo}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      ></video>
      <div className="absolute top-0 w-full h-full bg-black/80"></div>
      <div className="absolute top-0 w-full h-full   flex flex-col justify-center items-center text-white text-center  ">
      <Lottie
          className="w-72 md:w-96"
          animationData={animated}
          loop={true}
        />
        <h1 className="text-5xl font-bold w-4/12 text-center">
          Unleash Your Genius at ContestHub: Where Visionaries Rise!
        </h1>
        <p className="mt-5 text-slate-200 w-8/12">
          Dive into a World of Innovation and Recognition! ContestHub beckons as
          the dynamic hub for creatives, offering a seamless Project Contest
          Creation Platform. Fuel your creativity, engage vibrant communities,
          and bask in the spotlight of your talent across myriad domains. From
          design marvels to coding prowess and beyond, ContestHub is your
          gateway to seamless content creation and the quest for champions. Step
          in to make your mark!{" "}
        </p>
        {/* Search */}
       <div className="mt-10">
       <SearchBar></SearchBar>
       </div>
      </div>
    </div>
  );
};

export default Banner;
