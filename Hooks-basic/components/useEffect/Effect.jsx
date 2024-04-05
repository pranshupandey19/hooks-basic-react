import React, { Component, useContext, useEffect, useState } from 'react'
import { render } from 'react-dom'
import { AppContext } from '../useContext/ParentContext'


export const Effect = () => {

  

        const[count,setCount] = useState(0)
        const[age,setAge] = useState(30)
       const {isDark} = useContext(AppContext)
        
        


        useEffect(()=>{
          console.log("Component re-render");
          console.log(count);
          console.log(age);

        },[count,age])

        useEffect(()=>{
          return()=>{
            console.log("unmount");
          }
        },[])

  return (
    <div style={{border:"1px dashed white",
    padding:"10px",
    margin:"20px",
    backgroundColor:`${isDark ? "black" : "white"}`,
    color:`${isDark ? "white" : "black"}`
    }}>
      <h1>u s e E F F E C T</h1>
      <h3>Count:{count}</h3>
      <h3>Age:{age}</h3>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
      <button onClick={()=>{
        setAge(age-1)
      }}>-age</button>
    </div>
  )
}
