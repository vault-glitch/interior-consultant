const menu = document.getElementById('menu')
const close = document.getElementById('close')
const overlay = document.querySelector('.overlay')
const bigContainer = document.querySelector('.bigContainer')

menu.addEventListener('click', () => {
    menu.classList.remove('active')
    close.classList.add('active')
    overlay.classList.add('active')
    bigContainer.classList.add('hidden')
})

close.addEventListener('click', () => {
    close.classList.remove('active')
    menu.classList.add('active')
    overlay.classList.remove('active')
    bigContainer.classList.remove('hidden')
})