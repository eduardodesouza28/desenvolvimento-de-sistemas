function celsiusToKelvin(c) {
  let k = c + 273.15
  return (k)
}
function celsiusToFahrenheit(c) {
  let f = (c * 9/5) + 32
  return (f)
}

module.exports = {celsiusToFahrenheit, celsiusToKelvin}