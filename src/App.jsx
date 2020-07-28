import React, { useState } from "react";
import NavBar from "./components/NavigationBar";
import MusicBar from "./components/MusicPlayer";
import PlayList from "./components/Playlist";
import Carousel from "./components/MusicCarousel";
import Carousel1 from "./components/Carousel1";
import './styles.css';
function App()
{
    const [playsong,toggleSong]=useState(false);
    const [music,setSongs]=useState([]);    
    function deleteSong(id)
    {
        setSongs(prevSongs=> {
            return prevSongs.filter((songItem) => {
              return songItem.id !== id;
            });
          });
    }
    function clearAll()
    {
    setSongs([])
    }
    function addSong(songs)
    { 
      deleteSong(songs.id)
      setSongs(prevSongs=>{
          return [...prevSongs,songs];
      }) 
      toggleSong(true);
    }
    function addprevSong(songs)
    { 
      deleteSong(songs.id)
      setSongs(prevSongs=>{
          return [songs,...prevSongs];
      }) 
      toggleSong(true);
    }
    
    function nextSong()
    {
        var arr=music.slice(0,1);
             arr.map((newItem)=>{
            return addSong(newItem)  
        })
        
    }
    function prevSong()
    {
        var music1=music.slice(music.length-1,music.length);
        music1.map((newItem1)=>{    
            return addprevSong  (newItem1)  
        })
        
    }
    var arr=music.slice(music.length-1,music.length);
    return <div>
    <NavBar></NavBar>
    <div className="container-fluid">
    <div className="row">
        <div id="sidebar" className="col-sm-3">
         <div id="sidebar-header">
             <h1 className="pt-4 ml-5 theme-blue  text-shadow" >Recently<br></br> Played</h1>
             <i className="fa fa-music fa-5x theme-blue  " aria-hidden="true"></i>
         </div>
         <span className="theme-gray small">{music.length} Songs</span>
         <span><div className="badge badge-secondary pull-right mt-2 gray cursor" onClick={clearAll}>Clear all</div></span>
         <div className="overflow-auto  mt-3 " id="playlist">
         {
             music.map((songs,index)=>{
         return <PlayList id={songs.id} songname={songs.songname} artist={songs.artistname}
        musicurl={songs.songurl}
        musicImg={songs.imgurl}
        fun={addSong}
        delfun={deleteSong}
        index={index}
        len={music.length}
        ></PlayList>
             }).reverse()
         }
         </div>
        </div>
        <div className=" offset-1 col offset-1"  >
        <div className="row"  id="recommedation">
           <h4 className="ml-5 mt-3 theme-pink text-shadow" >RECOMMENDED</h4>
            <Carousel title="recom" fun={addSong}></Carousel>
        </div>
        <div className="row" id="recommedation1">
        <p className="ml-5 pt-2 mb-2 theme-pink  ">CATEGORY 1</p>
            <Carousel1 fun={addSong} title="cat1"></Carousel1>
            <p className="ml-5 pt-2 mb-2 theme-pink ">CATEGORY 2</p>
            <Carousel1 fun={addSong} title="cat2"></Carousel1>
        </div>
        </div>
    </div>
    </div>
    <div className={playsong==false?"hide":"show"}> 
    
    { 
        arr.map((songs)=>{
       return  <MusicBar songname={songs.songname} artist={songs.artistname}
        musicurl={songs.songurl}
        musicImg={songs.imgurl}
        state={false}
        nextSong={nextSong}
        prevSong={prevSong}></MusicBar>
    })} 
    
    
    </div> 
    </div>
  
}
export default App;