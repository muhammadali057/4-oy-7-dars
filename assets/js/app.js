const btnEl = document.querySelector(".btn");



const boxEl = document.querySelector(".box");

btnEl.addEventListener('click', () =>  {

    btn_oneEl.style.display = "block"

    boxEl.style.display = "block"

    btnEl.style.display= "none"


})
const btn_oneEl = document.querySelector(".btn_one")

btn_oneEl.addEventListener('click', () =>{

    btn_oneEl.style.display = "none"

    boxEl.style.display = "none"

    btnEl.style.display= "block"
    
})