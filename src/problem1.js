function problem1(pobi, crong) {
  let pobiArr = []
  let crongArr = []

  const plusFunc = ((data) => {
    let result = 0
    data.forEach((element) => {
      result += parseInt(element)
    })
    return result
  })

  const multiplyFunc = ((data) => {
    let result = 1
    data.forEach((element) => {
      result *= parseInt(element)
    })
    return result
  })

  pobi.forEach((element) => {
    const strElement = String(element).split('')
    const plus = plusFunc(strElement)
    const multiply =  multiplyFunc(strElement)

    if (plus > multiply) {
      pobiArr.push(plus)
    } else {
      pobiArr.push(multiply)
    }
  })

  crong.forEach((element) => {
    const strElement = String(element).split('')
    const plus = plusFunc(strElement)
    const multiply =  multiplyFunc(strElement)

    if (plus > multiply) {
      crongArr.push(plus)
    } else {
      crongArr.push(multiply)
    }  
  })

  pobiArr.sort((a, b) => b - a)
  crongArr.sort((a, b) => b - a)

  const pobiMax = pobiArr[0]
  const crongMax = crongArr[0]
  
  let answer = 0
  console.log(pobiMax)
  console.log(crongMax)
  if (pobiMax > crongMax) {
    answer = 1
  } else if (pobiMax < crongMax) {
    answer = 2
  } else if (pobiMax === crongMax) {
    answer = 0
  } else {
    answer = -1
  }

  return answer
}
module.exports = problem1;
