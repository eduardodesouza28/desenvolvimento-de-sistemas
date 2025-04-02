function centFeet(num, measure) {
  let result
  if (measure == "cent" || measure == "c"){
    result = num / 30.48
  } else {
    result = nem * 30.48
  }
  return result
}

module.exports = {centFeet}