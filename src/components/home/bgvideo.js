import React, {Component} from "react";
import ReactPlayer from "react-player";

const Bgvideo = () => {
    return (
        <ReactPlayer         
        className="background-video" 
        playing={true}
        loop={true}
        muted={true}
        plays-inline={true} 
        url="videos/HomepageVideo.mp4"></ReactPlayer> 
    );
  };
  
  export default Bgvideo;

// import { useState } from "react";

// const Video = () => {
//   const [src, setSrc] = useState("");

//   const handleChange = (event) => {
//     try {
//       // Get the uploaded file
//       const file = event.target.files[0];

//       // Transform file into blob URL
//       setSrc(URL.createObjectURL(file));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <video src={"src"} >
//         Sorry, your browser doesn't support embedded videos.
//       </video>
//       <input type="file" onChange={handleChange} />
//     </>
//   );
// };

// export default Video;