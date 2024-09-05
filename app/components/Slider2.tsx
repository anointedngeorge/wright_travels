
"use client"
import EmblaCarousel from 'EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import React from 'react'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



const Slider2 = () => {
  return (
    <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Slider2
