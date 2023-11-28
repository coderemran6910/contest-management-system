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
 console.log(allContest);
 const Business = allContest.filter(contest => contest.type === 'Business Contest') 
 const Medical = allContest.filter(contest => contest.type === 'Medical Contest')
 const Article = allContest.filter(contest => contest.type === 'Article Writing')
 const Writing = allContest.filter(contest => contest.type === 'Writing')
 const Gaming = allContest.filter(contest => contest.type === 'Gaming')

 console.log(Business.length);
//  Business Contest, Medical, Contest, Article Writing, Gaming.

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className=" pb-20 ">
      <SectionTitle
        title={"All Contest"}
        subTitle={"Explore Our All Incredivle Contest"}
      >
        {" "}
      </SectionTitle>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"flex gap-4 justify-center my-10 text-white uppercase font-bold text-xl mb-40"}>
          <Tab>All</Tab>
          <Tab>Business </Tab>
          <Tab>Medical</Tab>
          <Tab> Article </Tab>
          <Tab>Writing</Tab>
          <Tab> Gaming </Tab>
        </TabList>

        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            { allContest.length < 0 ? <><h2 className="text-center text-3xl text-red-500 text-white "> Empty </h2></> 
            : 
            allContest?.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })
            
          }
          </div>
        </TabPanel>

        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            { Business.length < 0 ? <><h2 className="text-center text-3xl text-red-500 text-white "> Empty </h2></> 
            : 
            Business?.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })
            
          }
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {Medical.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {Article.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })}
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            { Writing ? Writing?.map((contest, indx) => {
              return (
                <CardAllContest key={indx} contest={contest}></CardAllContest>
              );
            })
            : <h2 className="text-center text-3xl text-red-500"> Empty </h2>
          }
          </div>
        </TabPanel>

        
        <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {Gaming?.map((contest, indx) => {
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
