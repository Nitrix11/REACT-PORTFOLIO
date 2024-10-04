import"../components/SCSS/Bud.css"
import backgroundVideo from '../assets/green.mp4';
import { useRef, useEffect } from 'react';
import { useState } from 'react';

function Banner() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
  
    const handlePlayPause = () => {
      const video = videoRef.current;
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    };
  return (

    <div className="banner-container">
      <video
        loop
        autoPlay
        playsInline
        src={backgroundVideo}
        type="video/mp4"
        ref={videoRef}
      />
     
      {/* Your banner content here */}

  <div className="banner-content-wrapper">

  <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
  </div>
  


    </div>
  );
}
export default Banner;