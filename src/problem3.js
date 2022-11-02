function problem3(number) {
  let clapAmount = 0
  for (let n = 1; n <= number; n++) {
    clapAmount += count369(n)
  }
  return clapAmount
}

function count369(number) {
  let count = 0;
  const splitNums = splitNumber(number)
  splitNums.forEach((num) => {
    if (num === "3" || num === "6" || num === "9") count++
  })
  return count
}

const splitNumber = (num) => {
  return num.toString().split('')
} 

module.exports = problem3;