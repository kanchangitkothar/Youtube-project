import React from 'react'

const VideoList = (props) => {
  // console.log(props);

  let {title, thumbnailUrl, videoUrl, author, description, duration} = props.data.video;
  let {setVid, setTitle, setDescription, setDuration} = props.data;

  let handleClick = () => {
    setVid(videoUrl);
    setTitle(title)
    setDescription(description)
  }

  let handleMouseHover = () => {
    setDuration(duration)
  }

  return (
    <div className='videoItem'>
      <img src={thumbnailUrl} alt={title} className='rightImage' onClick={handleClick} onMouseEnter={handleMouseHover}/>
      <div className="about">
        <h1 className='author'>Author: {author}</h1>
        <h1>Duration: {duration}</h1>
      </div>
      <hr className='partitionList'/>
    </div>
  )
}

export default VideoList
