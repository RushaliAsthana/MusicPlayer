import React, { useState } from "react";

function Slide(props)
{
 const [songs,setSongs]=useState({
  id:props.id,
  songname:props.name,
  artistname:props.artist,
  songurl:props.musicUrl,
  imgurl:props.imgSrc
});
   function playSong()
   {
      setSongs({
           id:props.id,
           songname:props.name,
           artistname:props.artist,
           songurl:props.musicUrl,
           imgurl:props.imgSrc
      });
       props.fun(songs);
   }
   return <div onClick={playSong} className="col-sm-2 musiccard" id={props.id}>
      <div className="img-box">
     <img src={props.imgSrc} alt="Los Angeles"  className="img-fluid" />
      </div>
      <div className="caption">
       <span className="theme-blue">{props.name}</span><br/>
       <span className="theme-gray">{props.artist}</span>
      </div>
     
      
     </div>
     
     
  
}
export default Slide;