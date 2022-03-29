// Created by: Lucas Tyman
// Created on: Mar 2220
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trapizoid.
 */
function calculate() {
  // input
  const aBase = parseFloat(document.getElementById('a-base').value)
  const bBase = parseFloat(document.getElementById('b-base').value)
  const height = parseFloat(document.getElementById('height-of-trapezoid').value)

  // process
  const area = [(aBase + bBase) / 2] * height
  
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
