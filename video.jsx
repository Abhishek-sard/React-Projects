// src/Video.jsx
import React from 'react';

function Video() {
  const handlePlay = () => {
    console.log('Video is playing');
  };

  return (
    <div className="Video">
      <video width="600" controls onPlay={handlePlay}>
        <source src="path/to/your/video.mp4" type="video/mp4" />
        <source src="path/to/your/video.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
