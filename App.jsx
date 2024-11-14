import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import { useState } from 'react'

function App() {

  const boxRef=useRef()

  const { contextSafe } = useGSAP()
  const rotateBox=contextSafe(function(){
    gsap.to(boxRef.current,{
      rotate:360,
      duration:1,

    })
  })
  // memory management
  // useGSAP is used when the animation played then remove from memory
  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">Box</div>
    </main>
  )
}

export default App
