import './styles/main.scss'
import './map.js'

const burger = document.querySelector('.header__burger')
const burgerLine = document.querySelector('.header__burger-line')
const menu = document.querySelector('.header__navigation')

burger.addEventListener('click', function() {
  burgerLine.classList.toggle('header__burger-line--open')
  menu.classList.toggle('header__navigation--open')
})
