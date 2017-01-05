/**
 * Created by google on 17-1-5.
 */

import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

// use pure function component : https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md#enforce-stateless-react-components-to-be-written-as-a-pure-function-prefer-stateless-function
const SimpleSlider = function () {
  return (
    <Slider {...settings}>
      <div><h3>1 FROM component</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </Slider>
  )
}

export default SimpleSlider
