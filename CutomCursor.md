## Custom cursor

# Generic cursor
``` JavaScript
var main = document.querySelector("#main ")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function (dets)
{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease: "back.out"
  })

})
```

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="main">
    <div id="cursor"></div>
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
  width:100%;
  height:100%;
}


#main{
  height:100%;
  width:100%;
  background-color:#111;
}

#cursor{
  height:20px;
  width:20px;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  /* agar position absolute diya to sirf pehle page pae rahega */
}
```


# Advanced Cursor
``` JavaScript
var main = document.querySelector("#main ")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")
main.addEventListener("mousemove", function (dets)
{
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out"
  })

})

imageDiv.addEventListener("mouseenter", function ()
{
  cursor.innerHTML="View More",
  gsap.to(cursor, {
    scale: 2,
    backgroundColor:"#ffffff8a"
  })

})


// imageDiv.addEventListener("mouseenter", function ()
// {
//   cursor.innerHTML = "View more"
//   // Jitter effect (ruk ruk kai aa rha hai)
//   //automatic mouseleave nahi hoga agar ham overlay use karenge
//   gsap.to(cursor, {
//     scale: 2,
//   })

// })
imageDiv.addEventListener("mouseleave", function ()
{
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
    backgroundColor:"white"
  })

})
```

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="cursor"></div>
  <div id="main">
    
    <div id="image">
      <div id="overlay"></div>
      <img src="https://images.unsplash.com/photo-1730724742886-b0e36d1eb067?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>
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
  width:100%;
  height:100%;
}


#main{
  height:100%;
  width:100%;
  background-color:#111;
  display: flex;
  align-items: center;
  justify-content: center;
}

#cursor{
  height:30px;
  width:30px;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  /* agar position absolute diya to sirf pehle page pae rahega */
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:0.5;
  z-index: 9;
}

#image{
  height:30vw;
  width:70vw;
  background-color: red;
  position: relative;
}

#image img{
  height:100%;
  width:100%;
  object-fit:cover,
}

#overlay{
  background-color:transparent ;
  height:100%;
  width:100%;
  position: absolute;
  z-index: 10;
}

```