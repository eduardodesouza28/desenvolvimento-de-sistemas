function kelvinToCelsius(k) {
  let c = Number(k) - 273.15
  return (c)
}
function kelvinToFahrenheit(k) {
  let f = (Number(k) - 273.15) * 9 / 5 + 32
  return (f)
}

module.exports = {kelvinToCelsius, kelvinToFahrenheit}