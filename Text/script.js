// function breakTheText()
// {
//   var h1 = document.querySelector("h1")

//   // var h1Text = h1.textContent

//   var h1Text = document.querySelector("h1").textContent;

//   var splittedText = h1Text.split("")
//   //if nothing given in split then split in letters
//   //returns array
//   var clutter = ""

//   splittedText.forEach(function (e)
//   {
//     clutter += `<span>${e}</span>`
//     //js literals
//     //join sheriyans again

//   })
//   // console.log(clutter);

//   h1.innerHTML = clutter

//   //yahan tak hamare ek ek alphabet alag ho gya jo hamare animation mai kaam aayega
// }

// breakTheText()

// gsap.from("h1 span",{
//   //span inline hai uspe y:100 nahi chalega
//   //css main h1 span ko inline banao
//   y:50,
//   opacity:0,
//   duration:0.8,
//   delay:0.5,
//   stagger:-0.15
//   //agar stagger -ve to ulta chalega
// })

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