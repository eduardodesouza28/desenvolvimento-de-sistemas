function milesKm(num, measure) {
  let result
  if (measure == "km") {
    result = num * 1.609
  } else {
    result = num / 1.609
  }
  return result
}

module.exports = {milesKm}