// gsap.to('#box1',{
//   x:1500,
//   rotate:360,
//   duration:1.5,
//   delay:1
// })

// gsap.to('#box2',{
//   x:1500,
//   backgroundColor:"yellow",
//   duration:1.5,
//   delay:2.5
//   //ik ke baad doosra 
//   //to pehle ka duration + delay=delay of second
// })

// gsap.to('#box3',{
//   x:1500,
//   scale:0.5,
//   borderRadius:"50%",
//   duration:1.5,
//   delay:4
//   //ik ke baad doosra 
//   //to pehle ka duration + delay=delay of second
// })



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