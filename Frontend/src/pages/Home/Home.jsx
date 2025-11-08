import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import VideoSlider from '../../components/VideoSlider/VideoSlider'

import ServiceSection from '../../components/Services/ServiceSection/serviceSection'
// "../../components/Services/ServiceSection";

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <VideoSlider/>
        <ServiceSection/>
        {/* <Header/> */}
        {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
        {/* <FoodDisplay category={category}/> */}
        <AppDownload/>
    </div>
  )
}

export default Home