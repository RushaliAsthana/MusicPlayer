import React, { useState, useRef, useEffect } from "react";

    
function MusicPlayer(props)
{
 

  const [isPlaying,musicPlayPause]=useState(true);
  const audio=useRef('audio_tag');
  const [isMute,muteUnmute]=useState(true);
  const [setVolume, volumeSetter] = useState(0.3)
  const [timeduration,setDuration]=useState(0);
  const [currenttime,setCurrTime]=useState(0);
  const [repeat,toggleRepeat]=useState(false);
  
  const handleVolume = (q) => {
   volumeSetter(q);
    audio.current.volume = q;
  }
 function volumeMuter()
 {
   muteUnmute(!isMute)
   if(isMute)
  audio.current.volume = 0;
  else 
  audio.current.volume = setVolume;
 }
  function playPause()
  {
   if(audio.current.paused)
   {
   audio.current.play();
   }
   else
   audio.current.pause();

   musicPlayPause(!isPlaying);
  }
 function repeatSong()
 {
   toggleRepeat(!repeat)
 }
 
  function end()
  {
    musicPlayPause(!isPlaying)
  }   
  const handleProgress = (e) => {
    let compute = (e.target.value * timeduration) / 100;
    setCurrTime(compute);
    audio.current.currentTime = compute
  }
  const customStyle ={
    color:'#ed257a'
  }
  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
  
  return (<div  className="footer fixed-bottom cursor"><div className="slidecontainer">

   {repeat?<audio autoPlay loop ref={audio} src={props.musicurl} onLoadedData={()=>musicPlayPause(true)} onCanPlay={(e)=>{setDuration(e.target.duration) 
   }} preload="auto"
   onTimeUpdate={(e)=> setCurrTime(e.target.currentTime) 
   } onEnded={()=>{
     end()
   }} type="audio/mp3">
   </audio>:<audio autoPlay ref={audio} src={props.musicurl} onLoadedData={()=>musicPlayPause(true)} onCanPlay={(e)=>{setDuration(e.target.duration) 
   }} preload="auto"
   onTimeUpdate={(e)=> setCurrTime(e.target.currentTime) 
   } onEnded={()=>{
     end()
     props.nextSong()
   }
     } type="audio/mp3">
   </audio> }
   
  <input  onChange={handleProgress} value={timeduration ? (currenttime * 100) / timeduration : 0}  type="range"  min="0" step="0.5" className="slider cursor" id="myRange"/>  
</div>
<div className="container-fluid">
 <div className="row">
<div>
<span className="badge badge-secondary mt-2 ml-1 overflow-auto">{fmtMSS(currenttime)}</span>
  </div>
   <div className="col">
   <img id="playerimg" width="50px" height="50px" src={props.musicImg}/>
   <span className="row theme-blue"  id="sname">{props.songname}</span>
   <span className="row" id="aname">{props.artist}</span>
   </div>
   <div className="col-sm-2 d-flex justify-content-center2">
   <i id="baricon" className='fas fa-random fa-lg theme-blue'></i>
   <i id="baricon" onClick={repeatSong}  data-toggle="tooltip" title="Repeat" style={repeat?customStyle:null} className='fas fa-sync fa-lg theme-blue blue  '></i>
   <i id="baricon" className="fa fa-share-alt fa-lg theme-blue" aria-hidden="true"></i>
   </div>
   <div className="col-sm-4 d-flex justify-content-center">
   <i  id="playicons" onClick={props.prevSong}  data-toggle="tooltip" title="Previous" className='fas fa-step-backward fa-lg mt-3 theme-blue blue'></i>
   <i id="playicon" onClick={playPause}  data-toggle="tooltip" title="Play" className={isPlaying?'fas fa-pause-circle fa-3x ml-3 mr-3 theme-pink pink ':'fa fa-play-circle fa-3x ml-3 mr-3 theme-pink pink'}></i>
   <i  id="playicons" onClick={props.nextSong}  data-toggle="tooltip" title="Next" className='fas fa-step-forward fa-lg mt-3 theme-blue blue'></i>
   </div>
   <i onClick={volumeMuter} className={isMute?'fas fa-volume-up fa-lg mt-3 theme-blue blue':'fas fa-volume-mute fa-lg mt-3 theme-blue blue'} ></i>
   <div className="scontainer">
  <input  onChange={(e) => handleVolume(e.target.value / 100)} value={Math.round(setVolume   * 100)}type="range" min="1" max="100"  className="mt-4 ml-3 slider1" id="myRange"/>
   </div>
   <div className="pull-right">
      <span className="badge badge-secondary mr-1" id="endtime">{fmtMSS(timeduration)}</span>
      </div>

 </div>
</div>
</div>);
 


}
export default MusicPlayer;