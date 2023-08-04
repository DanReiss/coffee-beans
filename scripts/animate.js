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
    {y: ["-20px", 0], opacity: [0, 1], filter: ["blur(0.1rem)", 0]},
    { delay: 0.3, duration: 0.5}
  )

  return ({target}) => {};
})

inView('[data-animate="turning"]', ({target})=>{
  animate(
    target, 
    {rotateY: ["-30deg", 0], skewY: ["30deg", 0], opacity: [0, 1]},
    { delay: 0.2, duration: 0.5}
  )
  return ({target}) => {};
})

const hoverElements = document.querySelectorAll('[data-animate="hover"]')

hoverElements.forEach(el =>{
  el.addEventListener('mouseover', ()=>{
    animate(
      el, 
      {scale: [1, 0.95]}, 
      {duration: 0.3, easing: "ease-in-out"}
    );
    el.classList.add("active");
  })
  el.addEventListener('mouseout', ()=>{
    animate(
      el, 
      {scale: 1}, 
      {duration: 0.3, easing: "ease-in-out"}
    )
    el.classList.remove("active");
  })
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
