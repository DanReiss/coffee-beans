'use strict'
import { animate, scroll, inView } from  'motion';

const wrapper = document.querySelector(".carousel-wrapper");

const scrollOptions = {
  target: wrapper,
  offset: ["start -100px", "end end"],
}

scroll(
  animate('.carousel[data-direction="left"]',{ x: -350 }),
  scrollOptions
)

scroll(
  animate('.carousel[data-direction="right"]',{ x: 350 }),
  scrollOptions
)

scroll(
  animate('.navbar', { background: '#fff'}),
  {offset: [0, "100px"]}
)

inView('[data-animate="opacity"]', ({target})=>{
  animate(
    target, 
    {opacity: [0, 1]},
    { delay: 0.2, duration: 0.9}
  )

  return ({target}) => {
    animate(
      target,
      {opacity: [1, 0]},
      { delay: 0.2, duration: 0.9}
    )
  }
})

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
