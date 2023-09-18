const P1display = document.querySelector('#P1-display')
const P2display = document.querySelector('#P2-display')
const P1button = document.querySelector('#P1-Button')
const P2button = document.querySelector('#P2-Button')
const resetButton = document.querySelector('#reset')
const PointOption = document.querySelector('#pointOption')

let pointScore=0
let pointScore2=0
let winPoint = 3
let isGameOver = false

P1button.addEventListener('click',function(){
   if(!isGameOver){
    pointScore += 1
    if(pointScore === winPoint){
        isGameOver= true
    }
    P1display.textContent= pointScore
   }
    
})

P2button.addEventListener('click',function(){
    if(!isGameOver){
        pointScore2 += 1
        if(pointScore2 === winPoint){
            isGameOver= true
        }
        P2display.textContent= pointScore2
       }
        
})
function reset(){
    isGameOver= false
    pointScore = 0
    pointScore2 = 0
    P1display.textContent=0
    P2display.textContent=0
}

resetButton.addEventListener('click',reset)

PointOption.addEventListener('change',function(){
    winPoint=parseInt(this.value)
    reset()
})
