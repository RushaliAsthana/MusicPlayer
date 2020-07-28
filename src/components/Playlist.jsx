import React,{useState} from "react";


function Playlist(props)
{
    const [songs,setSongs]=useState({
        id:props.id,
        songname:props.songname,
        artistname:props.artist,
        songurl:props.musicurl,
        imgurl:props.musicImg
      });
         function playSong()
         {
            setSongs({
                 id:props.id,
                 songname:props.songname,
                 artistname:props.artist,
                 songurl:props.musicurl,
                 imgurl:props.musicImg
            });
             props.fun(songs);
         }
         function delSong()
         {
            setSongs({
                id:props.id,
                songname:props.songname,
                artistname:props.artist,
                songurl:props.musicurl,
                imgurl:props.musicImg
           });
             props.delfun(props.id);
         }
    
    return <div><div id={props.index===(props.len-1)?"activemusic":"ok" }  className="container-fluid cursor">
    <div onClick={playSong}>
        <img src={props.musicImg} height="35px" width="40px" className="mt-2 pull-left"></img>
        <span className="ml-2 theme-pink" id="song">{props.songname}</span><br/>
        <span id="artist" className="ml-2 theme-gray">{props.artist} </span>
        </div>
        <div className="dropdown">
    <button type="button" className="btn sideicon pull-right" data-toggle="dropdown">
        <i className="fa fa-ellipsis-v fa-lg theme-blue" data-toggle="dropdown" aria-hidden="true"></i>
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item  theme-pink blue" href="#" onClick={delSong}>Delete</a>
      <a className="dropdown-item theme-pink blue" href="#">Download</a>
      <a className="dropdown-item theme-pink blue" href="#">Share</a>
    </div>
  </div>
       </div>
       </div>
       
   
}
export default Playlist;