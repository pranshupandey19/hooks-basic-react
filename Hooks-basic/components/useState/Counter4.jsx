import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

export const Counter4 = () => {

    const[age,setAge] = useState(49)
    const[sib,setSib] = useState(49)

  useEffect(()=>{
    return()=>{
      console.log("counter 4 unmount");
    }
  },[])


  const {increaseCount} = useContext(AppContext)

  const{isDark} = useContext(AppContext)


  return (
    <div style={{border:"1px dashed white",
                padding:"10px",
                margin:"20px",
                backgroundColor:`${isDark?"black":"white"}`,
                color:`${isDark?"white":"black"}`
                }}>
      <h1>C O U N T E R - 4</h1>
        <h2>Age: {age}</h2>
        <h2>Sib: {sib}</h2>
      <button onClick={()=>{
        setAge((prev)=> prev +1)
      }}>Get Older</button>
      <button onClick={()=>{
        setSib((prev)=> prev +1)
      }}>Get more sib</button>

      <button onClick={()=>{
        setAge(0)
        setSib(0)
      }}>RESET</button>

      <button onClick={increaseCount}>+ Main count</button>
    </div>
  )
}
