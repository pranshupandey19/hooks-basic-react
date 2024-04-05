import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../useContext/ParentContext';

export const Counter2 = () => {
  const [currAge,setAge] = useState(20);
  const [currSib, setSib] = useState(1);

  const handleAge = ()=>{
    setAge(currAge+1);
  }

  const handleSib = ()=>{
    setSib(currSib+1);
  }

  const decreaseSib= ()=>{
    setSib(currSib-1)
  }

  useEffect(()=>{
    console.log("counter 2 mount");
  },[])

  const {mainCount} = useContext(AppContext)
  const {isDark} = useContext(AppContext)
  return (
    <div style={{border:"1px dashed white",
                padding:"10px",
                margin:"20px",
                backgroundColor:`${isDark?"black":"white"}`,
                color:`${isDark?"white":"black"}`
                }}>
      <h1>C O U N T E R - 2</h1>
        
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings: {currSib}</h4>
      <h3>Main count : {mainCount}</h3>

      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSib}>Get more Sib</button>
      <button onClick={decreaseSib}>Decrease Sib</button>

    </div>
  )
}
