function metersYards(num,measure) {
  let result
  if (measure == "m" || measure == "meters"){
    result = num * 1.094
  } else {
    result = num / 1.094
  }
  return result
}

module.exports = {metersYards}