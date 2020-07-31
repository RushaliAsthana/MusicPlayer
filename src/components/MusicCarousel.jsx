import React from "react";
import CreateSlider from "./CreateSlider";
function MusicCarousel(props)
{

   return <div id="demo" className="carousel slide demo cursor" data-ride="carousel" data-interval="false">  
<i className="fa fa-chevron-circle-left fa-2x pull-left theme-blue blue"  href="#demo" data-slide="prev"></i>
   <i className="fa fa-chevron-circle-right fa-2x pull-right theme-blue blue"  href="#demo" data-slide="next"></i>
   <div className="carousel-inner mt-2">
      <CreateSlider fun={props.fun}></CreateSlider>
   </div>
   
  <br/>
 </div>
  
 
 
}
export default MusicCarousel;