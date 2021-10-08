const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")


// ეკრანის Y სიგრძე
var screenY = window.innerHeight
// ეკრანის X სიგანე
var screenX = window.innerWidth

canvas.height = screenY 
canvas.width = screenX 

var mouseDown = false
var shapePosition = {
    x: 0,
    y: 0
}
var hue = 4
var hue2 = 4
window.addEventListener('resize', function(){
// ეკრანის Y სიგრძე
screenY = window.innerHeight
// ეკრანის X სიგანე
screenX = window.innerWidth

    canvas.height = screenY 
    canvas.width = screenX 
})

function drawShape(x, y, r, inset, spikeN, color, strokeColor){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.save()
    ctx.translate(x, y)
    
    ctx.moveTo(0, 0 - r)

    for(var n = 0; n < spikeN; n++){
        ctx.lineTo(0, 0 - r)
        ctx.rotate(Math.PI / spikeN)
        ctx.lineTo(0, 0 - r * inset)
        ctx.rotate(Math.PI / spikeN)
    }
    ctx.restore()
    ctx.closePath()
    if(document.getElementById("C1").checked){
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = 2
        ctx.stroke()

  
    }
    else{
        ctx.fill()
    }
   

    
    
    
    
    

}


canvas.addEventListener('mousemove', function(e){
    shapePosition.x = e.offsetX
    shapePosition.y = e.offsetY
   })

canvas.addEventListener('mousedown', function(){
    mouseDown = true
})

canvas.addEventListener("mouseup", function(){
    mouseDown = false
  })

window.setInterval(function(){
    if(mouseDown == true){
        hue += 1 * document.getElementById("I4").value
        hue2 += 1 * document.getElementById("I4").value
        drawShape(shapePosition.x, shapePosition.y, document.getElementById("I2").value, document.getElementById("I3").value,   document.getElementById("I1").value, "hsl("+hue+",100%,50%)", "hsl("+hue2+",100%,50%)")
    }
    
}, 0.001)