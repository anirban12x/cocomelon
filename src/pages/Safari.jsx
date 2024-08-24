import React from 'react';
/*
import '../App.css';
import '../index.css';*/
import '../safari.css';

const videos = [
  { id: 1, url: '/videos/demovideo.mp4 ', title: 'Camera 1' },
  { id: 2, url: '/videos/demovideo.mp4 ', title: 'Camera 2' },
  { id: 3, url: '/videos/demovideo.mp4', title: 'Camera  3' },
  { id: 4, url: '/videos/demovideo.mp4', title: 'Camera  4' },
  { id: 5, url: '/videos/demovideo.mp4', title: 'Camera  5' },
  { id: 6, url: '/videos/demovideo.mp4', title: 'Camera  6' },
];

function Safari() {
  return (
  
      <div className="background-safari">
        <div className="video-row">
          {videos.map((video, index) => (
            <div key={video.id} className="video-container">
                  <video
              muted
              loop
              autoPlay
              playsInline
              className="custom-video"
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
        <button className="action-button">Click Me</button>
      </div>
   
  )
}

export default Safari


