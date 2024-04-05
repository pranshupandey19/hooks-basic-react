import { useContext, useState } from 'react'
import './App.css'
import { Counter1 } from '../components/useState/Counter1'
import { Counter2 } from '../components/useState/Counter2'
import { Counter3 } from '../components/useState/Counter3'
import { Counter4 } from '../components/useState/Counter4'
import { Effect } from '../components/useEffect/Effect'
import ParentContext, { AppContext } from '../components/useContext/ParentContext'

function App() {
  const [show,setShow] = useState(true)

  const {isDark,setIsDark} = useContext(AppContext)

  return (
    <>
    <button onClick={()=>{
      setShow(!show)
    }}>C H A N G E</button>

   

    <button onClick={()=>{
      setIsDark(!isDark)
    }}>{isDark?"Light theme":"Dark theme"}</button>

    {show == true?(<>
      <Effect/>
      <ParentContext/>
    </>):(<>
      <Counter1/>
      <Counter2/>
      <Counter3/>
      <Counter4/>
    </>)}

     </>
  )
}

export default App
