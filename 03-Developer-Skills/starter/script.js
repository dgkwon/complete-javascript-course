// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const xyz = 32;
if (23 > 0) console.log(true);

console.log(xyz);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  // console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

const printForecast = function (arr) {
  let forecast = '';

  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}C in ${i + 1}days `;
  }

  forecast += '...';
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
