import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { assets } from '../../assets/assets';

// Your video data. Note the new URL path!
const videoData = [
//   {
//     url: '/EventKaroIntro.mp4', // This is now a URL
//     title: 'All services'
//   },
  {
    url: assets.EventKaro_0,
    title: 'Decor'
  },
  {
    url: assets.EventKaro_1,
    title: 'Catering'
  },
  {
    url: assets.EventKaro_2,
    title: 'Decorating'
  }
];

function VideoSlider() {
  // We use useRef to get direct access to the <video> elements
  // We store them in an array in this ref.
  const videoRefs = useRef([]);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // Find the video element for the *current* slide and pause it
    //   const videoElement = videoRefs.current[current];
    //   if (videoElement) {
    //     videoElement.pause();
    //   }
    },
  };

  return (
    <div className='video-slider'>
      <Slider {...sliderSettings}>
        {videoData.map((video, index) => (
          <div key={index}>
            <div 
              className="player-wrapper" 
              style={{ position: 'relative' /* 16:9 Aspect Ratio */ }}
            >
              <video
                // This function adds the <video> element to our refs array
                ref={el => (videoRefs.current[index] = el)} 
                src={video.url}
                autoPlay
                loop
                // controls
                muted
                width="100%"
                height="700px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VideoSlider;