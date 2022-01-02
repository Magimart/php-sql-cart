import React from 'react';
import { useState, useEffect, useCallback, useRef } from "react";
import { useTrail, animated as a } from "react-spring";
import { onToggle} from '../../../utils/helpers/helper';

const config = { mass: 5, tension: 2000, friction: 200 };


export const BackendStack = ({ myStack}) => {
    const [toggleOnClick, setToggleOnClick] = useState(false);



let [skills] = myStack && myStack.reduce((result, data, i, arr) => { 

         let doc = arr.filter(el => el.title ==="backend");
         const back = doc.map((data) => data.backendSkills.map((skill) => skill.name))
        return result = back;
    return result;
},[]);

const [tools] = myStack && myStack.reduce((result, data, i, arr) => {  
    let doc = arr.filter(el => el.title ==="backend");
    const tools = doc.map((data) => data.backendSkills.map((tool) => tool.tools));
    result = tools;
return result;
},[]);


const backendSkills = useTrail( skills.length, {
config,
opacity: toggleOnClick ? 1 : 0,
x: toggleOnClick ? 0 : 20,
height: toggleOnClick ? 30 : 0,
from: { opacity: 0, x: 20, height: 0 },
});

const frontendTools = useTrail( tools.length, {
config,
opacity: toggleOnClick ? 1 : 0,
x: toggleOnClick ? 0 : 20,
height: toggleOnClick ? 30 : 0,
from: { opacity: 0, x: 20, height: 0 },
});



return (
<section className="w-full px-3 py-2">
<div className="myStackButtonWrapper bg-red-600 flex w-full px-2">  
<div className="toggleButton 
            m-1
         "
>
    <button className="bg-yellow-900 rounded-sm w-12 h-8 font-bold ml-2 mr-auto text-2xl" 
            onClick={()=> onToggle({ setToggleOnClick})} 
    >
       {`${toggleOnClick ? "x" : "+"}`}
    </button>

</div>
<div className="myStackTitleWraper rounded-sm m-1 w-full bg-black flex justify-center">
   <h2 className=" text-white text-xl mx-">Backend</h2>
</div>
</div>
<div className="my-2  bg-black w-full flex bg-opacity-60  ">
<div className="skillsWrapper   bg-yellow-400 oppacity-30  w-1/3">        
    
{
    backendSkills.map(({ x, height, ...rest}, index) => {   
    return (

       <a.div
        key={skills[index]}
        className="trails "
               style={{
               ...rest,
               //  transform: x.interpolate(x => `translate3d(0,${x}px, 0)`)
                }}
            >
                   <a.div style={{ height }}
                >                                    
                      <span className="myStack bg-blue-500 bg-opacity-70 py-1  h-max px-3">
                        {skills[index]}
                      </span>
              </a.div>
           </a.div> 
    )
  }                       
)}
</div>
<div className="toolsWrapper p-1a w-4/6 bg-yellow-500 text-xs bg-opacity-40">
{
  frontendTools.map(({ x, height, ...rest}, index) => {   
    return (

       <a.div
            //    key={Math.floor(Math.random() * 1300)}
            key={tools[index]+Math.floor(Math.random() * 153313970)}
               className="trails "
               style={{
               ...rest,
               //  transform: x.interpolate(x => `translate3d(0,${x}px, 0)`)
                }}
            >
                   <a.div style={{ height }}
                >                                    
                      <span className="myStack bg-yellow-500 py-1 text-xs  h-max px-3">
                        {tools[index]}
                      </span>
              </a.div>
           </a.div> 
    )
  }                       
)}

</div>
</div>
</section>
);

}
