import React from "react";
import Music from "./Music";
import CreateSlide from "./CreateSlide";
function CreateSlider(props)
{
    let result=[]
    for(var i=0;i<Music.length/6;i++)
    {
     result.push(i);
    }
   return <div>
    {result.map((indexes) => {
     return (
       <CreateSlide i={indexes} fun={props.fun}></CreateSlide>
     );
   })}
   </div>
}
export default CreateSlider;