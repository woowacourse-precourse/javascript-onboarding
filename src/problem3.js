function problem3(number) {
  let clapAmount = 0
  for (let i = 1; i <= number; i++) {
    clapAmount += counter369(i)
  }
  return clapAmount
}

function counter369(num) {
  const splitNumber = (num) => {
    return num.toString().split('')
  } 
  const check369 = (arr) => {
    let count = 0;
    arr.forEach((item) => {
      if (item === "3" || item === "6" || item === "9") count++
    })
    return count
  } 
  return check369(splitNumber(num))
}

module.exports = problem3;