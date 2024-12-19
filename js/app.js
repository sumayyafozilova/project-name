const elBody =document.body
const elBtnRed = document.getElementById("btn-red")
const elBtnBlue = document.getElementById("btn-blue")
const elBtnYellow = document.getElementById("btn-yelllow")
const elBtnBlack = document.getElementById("btn-black")
const elBtnGreen = document.getElementById("btn-green")
const elBtnOrange = document.getElementById("btn-orange")


elBtnRed.addEventListener('click' , () => {
    elBody.style.backgroundColor = 'red'
})
elBtnBlue.addEventListener('click' , () => {
    elBody.style.backgroundColor = 'blue'
})
elBtnYellow.addEventListener('click' , () => {
    elBody.style.backgroundColor = 'yellow'
})
elBtnBlack.addEventListener('click' , () => {
    elBody.style.backgroundColor = 'Black'
})
elBtnGreen.addEventListener('click' , () => {
    elBody.style.backgroundColor = 'green'
})
elBtnOrange.addEventListener('click' , () => {
    elBody.style.backgroundColor = 'orange'
})