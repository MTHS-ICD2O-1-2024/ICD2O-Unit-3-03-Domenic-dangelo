// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates wage.
 */
function calculate() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById("radius").value)

  // process
  const volumeOfSphere = 4/3 * Math.PI * radiusOfSphere ** 3

  // output
  document.getElementById("answer").innerHTML =
    "volume is: " + volumeOfSphere.toFixed(3) + " mm³"
}
