import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

export const Counter3 = () => {

  const [data,setData] = useState({age:20,sibling: 3})



  function handleAge(){
    setData({
      ...data,
      age:data.age+1,
    })
  }
  const handleSibling= ()=>{
    setData({
      ...data,
      sibling:data.sibling+1,
    })
  }

  const {decreaseCount} = useContext(AppContext)

  const{isDark} = useContext(AppContext)

  return (
    <div style={{border:"1px dashed white",
                padding:"10px",
                margin:"20px",
                backgroundColor:`${isDark?"black":"white"}`,
                color:`${isDark?"white":"black"}`
                }}>
      <h1>C O U N T E R - 3</h1>
      <h2>My age : {data.age}</h2>
      <h2>Sibling : {data.sibling}</h2>
      
      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSibling}>Get more Sib</button>

      <button onClick={decreaseCount}>-Main count</button>

    </div>
  )
}
