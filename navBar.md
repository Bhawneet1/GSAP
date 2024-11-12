## navBar Animation

# Javascript code

```Javascript

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

```

# cSS

``` css
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html,body{
  height:100%;
  width:100%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#main{
  height:100%;
  width:100%;
  background-image: url(https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-position: center;
}

#nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
  color: white;
}

#nav i{
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
}
#nav h2{
  font-size: 30px;
}

body{
  overflow-x:hidden ;
}
#full{
  height: 100%;
  width: 25%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.547);
  top:0;
  /* right:0; */
  right:-25%;
  /* Width kai barabar right -ve mai */
  /* filter:blur(30px); */
  /* blur the element */
  backdrop-filter: blur(10px);
  /* background blur if opacity less than 0.5 */
  padding: 100px 50px;
}

#full h4{
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
}

#full i{
  position: absolute;
  top:5%;
  right:10%;
  background-color:white;
  border-radius: 50%;
  padding:5px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
}
```

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="main">
    <div id="nav">
      <h2>Sheriyans</h2>
      <i class="ri-menu-line"></i>
    </div>
    <div id="full">
      <h4>Work</h4>
      <h4>About</h4>
      <h4>Services</h4>
      <h4>Courses</h4>
      <h4>Contact Us</h4>
      <i class="ri-close-line"></i>
    </div>
    
  </div>
</body>
```