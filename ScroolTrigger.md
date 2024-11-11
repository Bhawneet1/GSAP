## Scroll Trigger

# first (Without Scroll trigger)

``` JavaScript

gsap.from("#page1 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
})
gsap.from("#page2 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
})
gsap.from("#page3 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
})
```
 
# With Scroll trigger(Basic not detailed)

``` JavaScript

gsap.from("#page1 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
})
gsap.from("#page2 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
  scrollTrigger :"page2 #box"
})
gsap.from("#page3 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
  scrollTrigger :"#page3 #box"
})
```
# With Attributes

``` JavaScript


gsap.from("#page1 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
})
gsap.from("#page2 #box",{
  scale:0,
  //matlab gayab
  // delay:1,
  duration:2,
  rotate:360,
  scrollTrigger :{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 60%"

    // Jab scroll trigger top sai 60% pai aayega to scrollTrigger
  }
})
gsap.from("#page3 #box",{
  scale:0,
  //matlab gayab
  delay:1,
  duration:2,
  rotate:360,
  scrollTrigger :"#page3 #box",
  scrollTrigger :{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 60%"

    // Jab scroll trigger top sai 60% pai aayega to scrollTrigger
  }
})
```

# diff animation

``` JavaScript

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
```

# With Scrub and pin

``` JavaScript

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
```


# Scroll horizontally

``` JavaScript
gsap.to("#page2 h1",{
  transform:"translateX(-150%)",
  scrollTrigger:{
    trigger:"#page2 ",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin:true
    //trigger parent here page2 and stop when fully scrolled
  }
})
```