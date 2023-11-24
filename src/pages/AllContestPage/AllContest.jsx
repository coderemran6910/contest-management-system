import SectionTitle from "../../components/shared/SectionTitle";
import bg from "../../assets/allcontest.svg";
// import bg from '../../assets/cool-background.png'
import CardAllContest from "./CardAllContest";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useAllContest from "../../hooks/useAllContest";
const AllContest = () => {
  const [tabIndex, setTabIndex] = useState(0);
 const [allContest] = useAllContest()
 const codding = allContest.filter(contest => contest.type === 'Coding')
 const design = allContest.filter(contest => contest.type === 'Design')
 const music = allContest.filter(contest => contest.type === 'Music')
 const gamming = allContest.filter(contest => contest.type === 'Gaming')
 const cooking = allContest.filter(contest => contest.type === 'Cooking')
 const innovation = allContest.filter(contest => contest.type === 'Innovation')
 const writing = allContest.filter(contest => contest.type === 'Writing')


  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="  ">
      <SectionTitle
        title={"All Contest"}
        subTitle={"Explore Our All Incredivle Contest"}
      >
        {" "}
      </SectionTitle>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"flex gap-4 justify-center my-10 text-white uppercase font-bold text-xl mb-40"}>
          <Tab>All</Tab>
          <Tab>Coding</Tab>
          <Tab>Design</Tab>
          <Tab> Music </Tab>
          <Tab>Gaming</Tab>
          <Tab> Cooking </Tab>
          <Tab> Innovation </Tab>
          <Tab> Writing </Tab>
        </TabList>

        <TabPanel>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {allContest.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {codding.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {design.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {music.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {gamming.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {cooking.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {innovation.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {writing.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
      </Tabs>

      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {allcontest.map((contest, indx) => {
          return <CardAllContest key={indx} contest={contest}></CardAllContest>;
        })}
      </div> */}
    </div>
  );
};

export default AllContest;
