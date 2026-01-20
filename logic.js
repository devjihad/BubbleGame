let increase =''

for(let i=0; i<50; i++){
    let num = Math.floor(Math.random()*10)
     increase += `<div class="bottomElement">${num}</div>`
     console.log(num)
}


document.querySelector('.bottom').innerHTML = increase