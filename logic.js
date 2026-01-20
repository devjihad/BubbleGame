let score = document.querySelector('#score')
let bottom = document.querySelector('#bottom')
let number =0
let result = 0

const increase =()=>{
    result += 10
    score.textContent = result
}

const element=()=>{
    let increase =''
for(let i=0; i<150; i++){
    let num = Math.floor(Math.random()*10)
     increase += `<div class="bottomElement">${num}</div>`
    //  console.log(num)
}
document.querySelector('.bottom').innerHTML = increase
}


const timestamp=()=>{
    let time =60 
    let timer = setInterval(() => {
        if(time >0){
            time--
            document.querySelector('#time').innerHTML = time
        }
        else{
            clearInterval(timer)
            document.querySelector('.bottom').innerHTML = `<h1 class='result'> Your Score is ${result}</h1>`
            document.querySelector('#hitt').textContent = 0

        }
    }, 1000);
}



const hitnum =()=>{
    number = Math.floor(Math.random()*10)
    document.querySelector('#hitt').textContent = number
   
}

bottom.addEventListener('click',(e)=>{
    let value = Number(e.target.textContent)
    console.log(value)
    if(number ==value){
        increase()
        hitnum()
        element()
    }

})

hitnum()
element()
timestamp()
// increase()
