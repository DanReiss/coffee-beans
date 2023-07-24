'use strict'
import { animate, scroll, inView, on } from  'motion'

const wrapper = document.querySelector(".carousel-wrapper")

const scrollOptions = {
  target: wrapper,
  offset: ["start start", "end end"],
}

scroll(
  animate('.carousel[data-direction="left"]',{ x: -250 }),
  scrollOptions
)

scroll(
  animate('.carousel[data-direction="right"]',{ x: 250 }),
  scrollOptions
)

scroll(
  animate('.navbar', { background: '#fff'}),
  {offset: [0, "100px"]}
)

const navOpenBtn = document.querySelector('.nav-button');
const navCloseBtn = document.querySelector('.nav-button-close');

navOpenBtn.addEventListener('click', ()=>{
  animate(    
    '.nav-list-toogle', 
    {x: ['-100%', 0]},
    {easing: "ease-in"}
  )
})

navCloseBtn.addEventListener('click', ()=>{
  animate(
    '.nav-list-toogle', 
    {x: [0, '-100%']},
    {easing: "ease-out"} 
  )
})
