function problem1(pobi, crong) {
  if (pobi[0] % 2 === 0) {
    return -1
  }

  if (pobi[0] + 1 !== pobi[1]) {
    return -1
  }

  let pobiScore = Math.max(sumOfEachDigit(pobi[0]), multiplyOfEachDigit(pobi[0]), sumOfEachDigit(pobi[1]), multiplyOfEachDigit(pobi[1]))
  let crongScore = Math.max(sumOfEachDigit(crong[0]), multiplyOfEachDigit(crong[0]), sumOfEachDigit(crong[1]), multiplyOfEachDigit(crong[1]))

  if (pobiScore > crongScore) {
    return 1
  } else if (pobiScore < crongScore) {
    return 2
  } else {
    return 0
  }
}

const sumOfEachDigit = (num) => {
  let sum = 0
  while (num > 0) {
    let digit = num % 10
    num = (num - digit) / 10
    sum += digit
  }
  return sum
}

const multiplyOfEachDigit = (num) => {
  let mul = 1
  while (num > 0) {
    let digit = num % 10
    num = (num - digit) / 10
    mul *= digit
  }
  return mul
}

module.exports = problem1;