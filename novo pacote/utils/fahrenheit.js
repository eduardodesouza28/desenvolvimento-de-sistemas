function fahrenheitToCelsius(f) {
  let c = (f - 32) * 5 / 9
  return (c)
}
function fahrenheitToKelvin(f) {
  let k = (f - 32) * 5 / 9 + 273.15
  return (k)
}

module.exports = {fahrenheitToCelsius,fahrenheitToKelvin}