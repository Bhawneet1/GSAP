import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {

  const [xValue,setXvalue] = useState(0)

  const [roti, setRoti] = useState(0);

  const [yValue, setYvalue] = useState(0);

  const rotateX =gsap.utils.random(-360,360,30)

  const randomX =gsap.utils.random(-500,500,100)
  //random number between -500 and 500 and multiples of 100

  const randomY =gsap.utils.random(-200,200,30)

  const imgRef=useRef()

  useGSAP(()=>{
    gsap.to(imgRef.current,{
      y:yValue,
      x:xValue,
      duration:1,
      rotate:roti,
    })
  },{scope:".main" [yValue,xValue,rotateX]})  
  return (
    <main>
        {/* <button onClick={()=>{
          setXvalue(randomX)
          setRoti(rotateX)
          setYvalue(randomY)
        }}
        >Animate</button> */}
        <img onClick={()=>{
          setXvalue(randomX)
          setRoti(rotateX)
          setYvalue(randomY)
        }} ref={imgRef} src="https://webstockreview.net/images/flies-clipart-animated-6.png"alt="" />
    </main>
    )
}

export default App