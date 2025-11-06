import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { assets } from '../../assets/assets';
import './VideoSlider.css';

const videoData = [
  {
    url: assets.EventKaro_0,
    title: 'Decor',
    description: 'Transform your event with elegant decor solutions.'
  },
  {
    url: assets.EventKaro_1,
    title: 'Catering',
    description: 'Savor the finest dishes from our expert chefs.'
  },
  {
    url: assets.EventKaro_2,
    title: 'Decorating',
    description: 'Create unforgettable memories with creative decorations.'
  }
];

function TypingDescription({ text, trigger }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.substring(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [text, trigger]);
  return <span>{displayed}</span>;
}

function VideoSlider() {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typingKey, setTypingKey] = useState(0);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      setTypingKey(prev => prev + 1);
    },
  };

  useEffect(() => {
    const videoElement = videoRefs.current[currentSlide];
    const handleEnded = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
      // Force reload and play, wrapped in timeout for React Slick compatibility in some browsers
      videoElement.load();
      setTimeout(() => {
        videoElement.play().catch(() => {}); // Silent catch prevents errors in rare cases
      }, 150);

      videoElement.removeEventListener('ended', handleEnded);
      videoElement.addEventListener('ended', handleEnded);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentSlide, typingKey]);

  return (
    <div className="video-slider">
      <Slider ref={sliderRef} {...sliderSettings}>
        {videoData.map((video, index) => (
          <div key={index}>
            <div className="player-wrapper">
              <video
                ref={el => videoRefs.current[index] = el}
                src={video.url}
                autoPlay
                loop={false}
                muted
                width="100%"
                height="700px"
                style={{ objectFit: 'cover', opacity: 1 }}
              />
              {/* Dark translucent overlay */}
              {currentSlide === index && (
                <div className="fade-dark"></div>
              )}
              {currentSlide === index && (
                <div className="description-no-bg">
                  <TypingDescription key={typingKey} text={video.description} trigger={typingKey} />
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VideoSlider;
