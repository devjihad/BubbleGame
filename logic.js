const element=()=>{
    let increase =''
for(let i=0; i<150; i++){
    let num = Math.floor(Math.random()*10)
     increase += `<div class="bottomElement">${num}</div>`
    //  console.log(num)
}
document.querySelector('.bottom').innerHTML = increase
}
element()

const timestamp=()=>{
    let time =60 
    let timer = setInterval(() => {
        if(time >0){
            time--
            document.querySelector('#time').innerHTML = time
        }
        else{
            clearInterval(timer)
        }
    }, 1000);
}

timestamp()

const hitnum =()=>{
    let hit = Math.floor(Math.random()*10)
    document.querySelector('#hitt').textContent = hit
    console.log(hit)
}

hitnum()