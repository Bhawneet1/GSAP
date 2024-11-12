var menu=document.querySelector("#nav i")
var cross=document.querySelector("#full i")

// var tl=gsap.timeline({paused:true})
//nothing will happen

var tl=gsap.timeline()
tl.to("#full",{
  right:0,
  duration:0.8,
})

tl.from("#full h4",{
  x:150,
  duration:0.5,
  stagger:0.2,
  opacity:0
})

tl.from("#full i",{
  opacity:0
})

tl.pause()
//timeline pause
menu.addEventListener("click",function(){
  tl.play()
  //timeline play
})

cross.addEventListener("click",function(){
  tl.reverse()
})
