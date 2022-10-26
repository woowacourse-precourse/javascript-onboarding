function problem1(pobi, crong) {
  let pobiMaxNumber = Math.max(calFromPage(pobi[0]), calFromPage(pobi[1]))
  let crongMaxNumber = Math.max(calFromPage(crong[0]), calFromPage(crong[1]))
  var answer;
  if(pobiMaxNumber > crongMaxNumber) {
    answer = 1
  } else if(pobiMaxNumber == crongMaxNumber) {
    answer = 0
  } else if(pobiMaxNumber < crongMaxNumber) {
    answer = 2
  } else {
    answer = -1
  }
  console.log(pobiMaxNumber, crongMaxNumber, answer)
  return answer;
}

function calFromPage(page) {
  let numbers = []
  while(page > 0) {
    number = page % 10
    numbers.push(number)
    page /= 10
    page = Math.floor(page)
  }
  return Math.max(sumWithNumbers(numbers), mulWithNumbers(numbers))

}

function sumWithNumbers(numbers) {
  let sumation = 0
  numbers.forEach(function (number) {
    sumation += number
  })
  return sumation
}

function mulWithNumbers(numbers) {
  let multiplication = 1
  numbers.forEach(function (number) {
    multiplication *= number
  })
  return multiplication
}

module.exports = problem1;
