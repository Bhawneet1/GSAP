## Svg

- svg path curve(search)
- svg is a container with multiple elements
- contains many curves
- Bézier Curves
- paste from MDN code
- Scalable Vector Graphics


# Copied Code
```CS

<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 80 Q 95 10 180 80" stroke="green" fill="transparent"/>
    </svg>
```

# Code Explain

- M 10 80 move to point x->10 y->80 start point
- Cubic curver C , Quaderatic curve Q
- Q 95 10 x->95 y->10 180 80 next and last point is x->180 y->80
- All three points are M 10 80,Q 95 10 180 80
- stroke color of curve
- to give string effect we need to change second value of y


# Code 2

``` JavaScript
let initialPath =`M 10 100 Q 500 100 990 100`

let finalPath =`M 10 100 Q 500 100 990 100`

let string=document.querySelector("#string")

string.addEventListener("mouseenter",(dets)=>{
  console.log(dets.x);
})

string.addEventListener("mouseleave",()=>{
  console.log("mouse leaved");
})
```
# GSAP easing(Search)

- to manage speed of animation 
# Modified Code

``` JavaScript
var path = `M 10 100 Q 500 100 990 100`

var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")

// string.addEventListener("mouseenter",(dets)=>{
//   console.log(dets.x);
// })

// string.addEventListener("mouseleave",()=>{
//   console.log("mouse leaved");
// })

string.addEventListener("mousemove", function (dets)
{
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
  gsap.to("svg path", {//change attribute
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",

  })
})
string.addEventListener("mouseleave", function ()
{
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration:1.5,
    ease:"elastic.out(1,0.2)"
  })
})
```
final code 

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>20
  <div id="string">
    <svg width="1000" height="200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent"/>
    </svg>
    
  </div>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="script.js"></script>
</html>
```

``` CSS

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
 html,body{
  height:100%;
  width:100%;
 }

body{
  background-color: #111;
}
#string{
  height:200px;
  width:100%;
  /* background-color: red; */
}

```