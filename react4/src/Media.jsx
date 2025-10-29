import './Media.css'; 

function Media() {
  return (
    <div className="media-container">
      <img src="car.jpg" alt="Car" className="media-image" />
      <video controls className="media-video">
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio controls className="media-audio">
        <source src="audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default Media;
