import React from "react";
import HeroSection from "./components/HeroSection"
import Service from "./components/Service";
import Trusted from "./components/Trusted";
import  FeaturesProducts from "./components/FeaturesProducts"
const Home = ()=>{
    const data={
        name:"s-store"
      }
      
    return(
          <>
          <HeroSection mydata={data}/>
          <FeaturesProducts/>
          <Service/>
          <Trusted/>
          </>
    )
}

export default Home;