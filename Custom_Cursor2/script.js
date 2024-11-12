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
