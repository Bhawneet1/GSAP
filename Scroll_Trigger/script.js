// gsap.from("#page1 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
// })
// gsap.from("#page2 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
// })
// gsap.from("#page3 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
// })



// gsap.from("#page1 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
// })
// gsap.from("#page2 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
//   scrollTrigger :"page2 #box"
// })
// gsap.from("#page3 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
//   scrollTrigger :"#page3 #box"
// })


// gsap.from("#page1 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
// })
// gsap.from("#page2 #box",{
//   scale:0,
//   //matlab gayab
//   // delay:1,
//   duration:2,
//   rotate:360,
//   scrollTrigger :{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%"

//     // Jab scroll trigger top sai 60% pai aayega to scrollTrigger
//   }
// })
// gsap.from("#page3 #box",{
//   scale:0,
//   //matlab gayab
//   delay:1,
//   duration:2,
//   rotate:360,
//   scrollTrigger :"#page3 #box",
//   scrollTrigger :{
//     trigger:"#page2 #box",
//     scroller:"body",
//     markers:true,
//     start:"top 60%"

//     // Jab scroll trigger top sai 60% pai aayega to scrollTrigger
//   }
// })


gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller:"body",
    markers: true,
    start: "top 50%"
  }
})
gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller:"body",
    markers: true,
    start: "top 50%"
  }
})