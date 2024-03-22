
import { useState } from 'react'
import VideoData from '../video.json'
import Player from './Player';
import VideoList from './VideoList';
import NavBar from './NavBar';

const VideoContainer = () => {
    let [state, setState] = useState(VideoData)
    // console.log(state);

    let [vid, setVid] = useState(
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    )

    let [title, setTitle] = useState("Big Buck Bunny")
    let [description, setDescription] = useState("Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org")
    let [duration, setDuration] = useState("8:18")

  return (
    <>
        <div>
            <NavBar/>
        </div>
        <section className='video-block'>
            <aside className="left">
                <Player data={{state, vid, title, description, duration}}/>
            </aside>
            <aside className="right">
                <h1 className='heading'>Video Suggestions</h1>
                {state.map((video) => {
                    return( <VideoList key={video.id} data={{video, setVid, setTitle, setDescription, setDuration}}/>)
                })}
            </aside>
        </section>
    </>
  )
}

export default VideoContainer
