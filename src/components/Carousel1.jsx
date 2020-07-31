import React from "react";
import CreateSlider from "./CreateSlider";
function CategoryCarousel(props)
{
   return <div id={props.title==="cat1"?"demo1":"demo2"} className="carousel slide demo2" data-ride="carousel" data-interval="false">
   
<i className="fa fa-chevron-circle-left fa-2x pull-left theme-blue blue"  href={props.title==="cat1"?"#demo1":"#demo2"} data-slide="prev"></i>
   <i className="fa fa-chevron-circle-right fa-2x pull-right theme-blue blue"   href={props.title==="cat1"?"#demo1":"#demo2"} data-slide="next"></i>
   <div className="carousel-inner">
   <CreateSlider fun={props.fun}></CreateSlider>
   </div>
  <br/>
 </div>
 
}
export default CategoryCarousel;