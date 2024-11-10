## GSAP

# Two methods 

- to-> initial to final position
- from -> final to initial position

- Code-1
``` JavaScript
gsap.to('#box',{
  x:1000,
  duration:2,//in sec
  delay:1//in sec
})
```
- code-2

``` JavaScipt

gsap.to('#box1',{
  x:1200,
  duration:2,
  delay:1
 })

  gsap.to('#box2',{
    x:500,
    y:500,
    duration:2,
    delay:1
  })
```

- code 3
``` JavaScript

gsap.to('#box1',{
  x:1200,
  duration:2,
  delay:1
})



gsap.from('#box2',{
  x:1200,
  duration:2,
  delay:1
})

//uski initial position x:1200 pai set ho jaegi in box2

```

- code-4
``` JavaScript

gsap.to('#box1',{
  x:1200,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor:"blue",
  borderRadius:"50%",
  scale:0.5
})

gsap.from('#box2',{
  x:1200,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor:"blue",
  borderRadius:"50%",
  scale:0.5
})
```
- code-5

--- JavaScript

gsap.from("h1",{
  opacity:0,
  // invisible to visible
  color:"red",
  duration:2,
  y:30,
  delay:1,
  stagger:0.3
  //matlab ik name kai aalag alag lo ik ik karke chale aur kitne time kai liye
  
})
```


- code 6

``` JavaScript

gsap.to("#box",{
  x:1200,
  duration:2,
  delay:1,
  rotate:360,
  repeat:-1,
  //ik baar repeat hoga ik baar chalega par uske baab ik aur baar
  //-1 matlab infinite

  yoyo:true
  //ghoom kai wapis
})
```


# TimeLine

- basic
``` JavaScript

gsap.to('#box1',{
  x:1500,
  rotate:360,
  duration:1.5,
  delay:1
})

gsap.to('#box2',{
  x:1500,
  backgroundColor:"yellow",
  duration:1.5,
  delay:2.5
  //ik ke baad doosra 
  //to pehle ka duration + delay=delay of second
})

gsap.to('#box3',{
  x:1500,
  scale:0.5,
  borderRadius:"50%",
  duration:1.5,
  delay:4
  //ik ke baad doosra 
  //to pehle ka duration + delay=delay of second
})

```

# Code with timeline

``` JavaScript

//To make synchronous we need timeline

let tl=gsap.timeline()

tl.to("#box1",{
  x:1000,
  rotate:360,
  duration:1.5,
  delay:1
})

tl.to("#box2",{
  x:1000,
  duration:1.5
})

tl.to("#box3",{
  x:1000,
  duration:1.5
})

//Automatically in sync

```


# Code 2 timeline

``` JavaScript

let tl=gsap.timeline()

tl.from("h2",{
  y:-15,
  opacity:0,
  duration:1,
  delay:0.5
})
tl.from("h4",{
  y:-15,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.3
})

tl.from("h1",{
  y:20,
  opacity:0,
  duration:0.5,
  scale:0.2
})
```
