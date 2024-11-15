## Donot give height to parent

# data-scroll-container on the page

# data-scroll on other pages

# data-scroll-speed="3"
Jisko de rahe ho vo jada tej scroll hota hai
door jaegi

# agar -ve data-scroll-speed to slow scroll
to pass aayegi

# agar +ve to tej


# data-scroll-direction:horizontal

# locomotive cdn on google to include files

# locomotive github code

# locomotive v5-beta type


# Code

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="main" data-scroll-container>
    <div id="page1" data-scroll></div>
    <div id="page2">
      <img data-scroll data-scroll-speed="10" data-scroll-direction="horizontal"
      src="https://images.unsplash.com/photo-1649770638484-cd409eabd3ca?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">

      <img data-scroll data-scroll-speed="-1"
      src="https://images.unsplash.com/photo-1649770638484-cd409eabd3ca?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>
    <div id="page3" data-scroll></div>
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
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
  height: 100%;
  width: 100%;
}

/* parent ko height width nahi deni */

#page1{
  height:100vh;
  width:100%;
  background-color: lightblue;
}

#page2{
  height:100vh;
  width:100%;
  background-color: rgb(72, 131, 151);
  display: flex;
  justify-content: center;
  align-items: center;
}

#page3{
  height:100vh;
  width:100%;
  background-color: rgb(51, 93, 107);

}

#page2 img{
  background-size: cover;
  height: 300px;
  
  object-fit: cover;
}
```

``` JS
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp:0.1
  //smoothness(0 to 1)
});
```