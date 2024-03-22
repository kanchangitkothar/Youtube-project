import { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { GrPauseFill } from "react-icons/gr";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

const Player = (props) => {

  // console.log(props);
  let { play, setPlay } = useState()

  let { data: { state, vid, title, description, duration} } = props;

  let videoRef = useRef();

  let PlayPause = () => {
    videoRef.current.autoplay = true;
    setPlay(!play);
    if (play == true) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  let handlePlay = () => {
    videoRef.current.autoplay = true;
    videoRef.current.play();
  }

  let handlePause = () => {
    videoRef.current.autoplay = true;
    videoRef.current.pause();
  }

  return (
    <>
      <div>
        <h1 className='headingleft'>Video Player</h1>
        <video src={vid} onClick={PlayPause} ref={videoRef} className='leftVideo'></video>
        <div className="titleSubscribe">
          <h2 className='title'>{title}</h2>
          <button className='subscribe'>Subscribe</button>
        </div>
        <h3 className='desc'>{description}</h3>
      </div>
      <div className='btnContainer'>
        <div className="controlButtons">
          <button onClick={handlePlay} className="btnplay"><FaPlay /></button>
          <button onClick={handlePause} className="btnpause"><GrPauseFill /></button>
        </div>
        <div className='btnContainerIcons'>
          <div className='likesunlike'>
            <button className='thumbsUp'><LuThumbsUp />1.1k</button>
            <button className='thumbDown'><LuThumbsDown /></button>
          </div>
          <button className='iconshare'><IoIosShareAlt /><span>Share</span></button>
          <button className='icondownload'><MdOutlineFileDownload /><span>Download</span></button>
          <button className='menu'><HiDotsHorizontal /></button>
        </div>
      </div> <hr className='partition' />
      
    </>
  )
}

export default Player
