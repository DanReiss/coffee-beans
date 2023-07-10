'use strict'
import { animate, scroll } from  'motion'

const wrapper = document.querySelector(".carousel-wrapper")

const scrollOptions = {
  target: wrapper,
  offset: ["start start", "end end"]
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
  animate('.navbar', { background: '#fff', padding: "0.25rem 1rem" }),
  {offset: [0, "100px"]}
)