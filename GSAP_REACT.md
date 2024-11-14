## GSAP WITH REACT

# Go to google and type gsap react

# type-> npm install @gsap/react

# Pass function in useGSAP 
``` JavaScript

useGSAP(()=>{
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
    gsap.to(".box",{
      x:1000,
      duration:2,
      delay:1,
      repeat:-1,
      yoyo:true,
    })
  })


 

```


# Code 2

``` JavaScript

const App = () => {
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1,
  //     repeat:-1,
  //     yoyo:true,
  //   })
  // })

  const gsapRef = useRef()

  useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x:1000,
      duration:2,
      delay:1,
      rotate:720,
      yoyo:true,
      repeat:-1,
    })
  })
  return (
    <main>
      <div ref ={gsapRef} className='box'></div>
    </main>
  )
}

```


# Code-2

``` JavaScript
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1,
  //     repeat:-1,
  //     yoyo:true,
  //   })
  // })

  const gsapRef = useRef()

  useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x:1000,
      duration:2,
      delay:1,
      rotate:720,
      yoyo:true,
      repeat:-1,
    })
  })
  return (
    <main>
      <div ref ={gsapRef} className='box'></div>
    </main>
  )
}

export default App

```


# code 3

``` Javascript

 useGSAP(()=>{
    gsap.to(".box",{
      rotate:720,
      duration:1,
      delay:1
    })
  })

  ```


# If we need to run only one (useRef)

``` javascript
const boxRef = useRef()

  useGSAP(()=>{
    gsap.from((boxRef.current),{
      rotate:360,
      delay:1,
      duration:1
    })
  })
  return (
    <main>
      <div className='container'>
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  )


export default App
```


# Code 

``` javascript

 useGSAP(()=>{
    gsap.from(".box",{
      rotate:360,
      scale:0,
      duration:1,
      opacity:0,
      delay:0.5
    })
  })
```


``` javascript
useGSAP(()=>{
    gsap.from(".box",{
      rotate:360,
      scale:0,
      duration:1,
      opacity:0,
      delay:0.5
    })
  },{scope:".container"})//pass object to only container pae apply
  ```



# Second way to pass object

``` javascript

const container =useRef()
  useGSAP(()=>{
    gsap.from(".box",{
      rotate:360,
      scale:0,
      duration:1,
      opacity:0,
      delay:0.5
    })
  },{scope:container})//pass object to only container pae apply

```


# gsap utils


# CSS

``` CSS
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color: #111;
}

html,body{
  height:100%;
  width:100%;
}

main{
  height:100vh;
  width:100%;
  background-color: #111;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}



.box{
  height:200px;
  width:200px;
  background-color: lightcoral;
  border-radius:20px ;
  margin: 20px;
}

button{
  padding: 10px 70px;
  background-color: lightgreen;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 800;
}

button:hover{
  background-color: rgba(144, 238, 144, 0.636);
  scale: 1.05;
  cursor: pointer;
}
button:active{
  scale: 0.96;
  
}
```

# Prev CSS

``` CSS
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color: #111;
}

html,body{
  height:100%;
  width:100%;
}

main{
  height:100vh;
  width:100%;
  background-color: #111;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}



.circle{
  height:200px;
  width:200px;
  border-radius: 50%;
  background-color: lightcoral;
  margin: 20px;
}

button{
  padding: 10px 70px;
  background-color: lightgreen;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 800;
}

button:hover{
  background-color: lightsalmon;
}
button:active{
  scale: 0.96;
  
}
```


# NEw Js

``` Js
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {

  const [xValue,setXvalue] = useState(0)

  const [roti, setRoti] = useState(0);

  const rotateX =gsap.utils.random(-360,360,30)

  const randomX =gsap.utils.random(-500,500,100)
  //random number between -500 and 500 and multiples of 100

  const boxRef=useRef()

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xValue,
      duration:1,
      rotate:roti,
    })
  },[xValue,rotateX])  
  return (
    <main>
        <button onClick={()=>{
          setXvalue(randomX)
          setRoti(rotateX)
        }}
        >Animate</button>
        <div ref ={boxRef} className="box"></div>
    </main>
    )
}
```

# fly

``` js

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
  },[yValue,xValue,rotateX])  
  return (
    <main>
        <button onClick={()=>{
          setXvalue(randomX)
          setRoti(rotateX)
          setYvalue(randomY)
        }}
        >Animate</button>
        <img className="im" ref={imgRef} src="https://webstockreview.net/images/flies-clipart-animated-6.png"alt="" />
    </main>
    )
}

export default App

```