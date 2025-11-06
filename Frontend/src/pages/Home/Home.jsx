import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import VideoSlider from '../../components/VideoSlider/VideoSlider'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <VideoSlider/>
        {/* <Header/> */}
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home