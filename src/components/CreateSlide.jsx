import React from "react";
import Slides from "./Slides";
import Music from "./Music";
function CreateSlide(props)
{
 
   var arr=[];
      arr=Music.slice(props.i*6,(props.i+1)*6);
         
            return <div className={props.i==0?"carousel-item active":"carousel-item"}>
            <div className="row">
            {arr.map((musicItem, index) => {
        return (
          <Slides
            key={musicItem.key}
            id={musicItem.key}
            name={musicItem.name}
            artist={musicItem.artist}
            imgSrc={musicItem.musicImage}
            musicUrl={musicItem.musicUrl}
            fun={props.fun}
          />
        );
      })}
               </div>
            </div>
          
  

}
export default CreateSlide;