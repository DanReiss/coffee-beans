'use strict'
import { animate, scroll } from  'motion'

const wrapper = document.querySelector(".carousel-wrapper")

const scrollOptions = {
  target: wrapper,
  offset: ["start -200px", "-200px end"]
}

scroll(
  animate('.carousel[data-direction="left"]',{ x: -250 }),
  scrollOptions
)

scroll(
  animate('.carousel[data-direction="right"]',{ x: 250 }),
  scrollOptions
)
