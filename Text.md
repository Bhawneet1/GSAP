## Text animation

# basic

``` Javascript
function breakTheText()
{
  var h1 = document.querySelector("h1")

  // var h1Text = h1.textContent

  var h1Text = document.querySelector("h1").textContent;

  var splittedText = h1Text.split("")
  //if nothing given in split then split in letters
  //returns array
  var clutter = ""

  splittedText.forEach(function (e)
  {
    clutter += `<span>${e}</span>`
    //js literals
    //join sheriyans again

  })
  // console.log(clutter);

  h1.innerHTML = clutter

  //yahan tak hamare ek ek alphabet alag ho gya jo hamare animation mai kaam aayega
}

breakTheText()

gsap.from("h1 span",{
  //span inline hai uspe y:100 nahi chalega
  //css main h1 span ko inline banao
  y:50,
  opacity:0,
  duration:0.8,
  delay:0.5,
  stagger:-0.15
  //agar stagger -ve to ulta chalega
})

```

``` CSS
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  color:white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
html,body{
  height:100%;
  width:100%;
}
body{
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  font-size: 80px;
  overflow: hidden;
}
h1 span{
  display: inline-block;
}
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
  <h1>Sheriyans</h1>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="script.js"></script>
</html>
```


# Only JavaScript code change for new animation is

``` Javascript
function breakTheText()
{
  var h1 = document.querySelector("h1")

  var h1Text = document.querySelector("h1").textContent;

  var splittedText = h1Text.split("")

  var clutter = ""

  console.log(splittedText.length)
  
  var halfValue=(splittedText.length/2)

  splittedText.forEach(function (e,i)
  {
    if(i<halfValue){
      clutter+=`<span class="a">${e}</span>`
    }else
    {
      clutter+=`<span class="b">${e}</span>`
    }
  })
  h1.innerHTML=clutter
}

breakTheText()

gsap.from("h1 .a",{
  y:50,
  duration:0.6,
  delay:0.5,
  stagger:0.15,
  opacity:0
})

gsap.from("h1 .b",{
  y:50,
  duration:0.6,
  delay:0.5,
  stagger:-0.15,
  opacity:0
})
```