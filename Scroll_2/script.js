gsap.from("#page2 #box", {
  rotate: 720,
  opacity:0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start:"top 60%",
    end:"top 30%",
    // scrub:true,
    // scrub end aur start kai beech animation chalata hai aur agar reverse scroll to reverse animation
    //true or false or 1 to 5
    scrub:2,
    //smooth
    pin:true,
    //jahan ruke vahi pin
  }
})