import React from 'react';
import Banner from "../../components/Banner/Banner";
import Items from "../../components/Items/Items";

const Home=()=>{
return(
    <>
      <div style={{paddingTop:"10px"}}>
      <Banner />
      </div>
    <div style={{paddingTop:"20px"}}>
    <Items />
    </div>
    </>
);
};

export default Home;