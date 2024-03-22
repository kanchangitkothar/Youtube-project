
import { FcSearch } from "react-icons/fc";
import { IoMicSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav>
      <h1 className="navheading">Youtube Lite</h1>
      <div className="searchBar">
        <input type="search" placeholder='Search'/><FcSearch className='searchbutton'/><IoMicSharp className='mic'/>
      </div>
      <div className="sections">
      <select name="options" id="">
        <option value="movies">Movies</option>
        <option value="webSeries">Web Series</option>
        <option value="cartoons">Cartoons</option>
        <option value="channels">Channels</option>
      </select>
      </div>
    </nav>
  )
}

export default NavBar
