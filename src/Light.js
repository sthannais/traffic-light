import React, { useState} from "react";

const Light = () => {
    const [glow1, setGlow1] = useState ('light red');
    const [glow2, setGlow2] = useState ('light yellow');
    const [glow3, setGlow3] = useState ('light green');

  const changeColoRed =()=>{
    setGlow1('light red glow');
    setGlow2('light yellow');
    setGlow3('light green');
  } 

  const changeColorYellow =()=>{
    setGlow2('light yellow glow');
    setGlow1('light red');
    setGlow3('light green');


  } 

  const changeColorGreen =()=>{
    setGlow3('light green glow');
    setGlow1('light red');
    setGlow2('light yellow');
  } 

    return (
        <div> 
            <div className={glow1} onClick={changeColoRed}></div>
            <div className={glow2} onClick={changeColorYellow}></div>
            <div className={glow3} onClick={changeColorGreen}></div>
        </div>
    );
};

export default Light;