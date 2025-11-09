import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import VideoSlider from '../../components/VideoSlider/VideoSlider'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Gallery from '../../components/Gallery/Gallery'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Testimonials from '../../components/Testimonials/Testimonials'
import StatsCounter from '../../components/StatsCounter/StatsCounter'
import CTA from '../../components/CTA/CTA'
import FAQ from '../../components/FAQ/FAQ'


import ServiceSection from '../../components/Services/ServiceSection/serviceSection'
// "../../components/Services/ServiceSection";

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <VideoSlider/>
        <ServiceSection/>
        <WhyChooseUs/>
        <Gallery/>
        <HowItWorks/>
        <Testimonials/>
        <StatsCounter/>
        <CTA/>
        <FAQ/>
        {/* <Header/> */}
        {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
        {/* <FoodDisplay category={category}/> */}
        <AppDownload/>
    </div>
  )
}

export default Home