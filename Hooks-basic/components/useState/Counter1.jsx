import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

export const Counter1 = () => {

  const[currAge,setCurrAge] = useState(20)

  const decrease = ()=>{
    setCurrAge(currAge-1)
  }

  const Increase10Years=()=>{
    // setCurrAge(currAge+10)
    for(let i =0;i<10;i++){
      setCurrAge((prev)=>{
        return prev +1
      })
    }
  }

  const {isDark} = useContext(AppContext)

  return (
    <div style={{border:"1px dashed white",
                padding:"10px",
                margin:"20px",
                backgroundColor:`${isDark ? "black" : "white"}`,
                color:`${isDark ? "white" : "black"}`
                }}>
      <h1>C O U N T E R - 1</h1>
      <h2>Age : {currAge}</h2>
      <button onClick={()=>{
        setCurrAge(currAge+1)
      }}>Get Older</button>
      <button onClick={decrease}>Get younger</button>
      <button onClick={Increase10Years}>Get 10 Years Older</button>
    </div>
  )
}
