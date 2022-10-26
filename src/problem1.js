function check(animal) {
  // 왼쪽 페이지는 홀수 , 오른쪽 페이지는 짝수
  if ( animal[0] % 2 === 1 && animal[1] % 2 === 0 ) {
    // 페이지의 차는 1
    if (animal[1] - animal[0] === 1) {
      return true
    }
  }
  return false
}

function findMax(animal) {
  const leftCase = String(animal[0])
  let animalLeftAdd = 0
  let animalLeftMul = 1

  for (let i = 0 ; i < leftCase.length; i ++) {
    animalLeftAdd += parseInt(leftCase[i])
    animalLeftMul *= parseInt(leftCase[i])

  }
  const animalLeft = Math.max(animalLeftAdd, animalLeftMul)
  const rigthCase = String(animal[1])
  let animalRightAdd = 0
  let animalRightMul = 1

  for (let i = 0 ; i < rigthCase.length; i++) {
    animalRightAdd += parseInt(rigthCase[i])
    animalRightMul *= parseInt(rigthCase[i])
  }

  const animalRight = Math.max(animalRightAdd, animalRightMul)

  const animalMax = Math.max(animalLeft, animalRight)
  return animalMax
}

function problem1(pobi, crong) {
  var answer;
  console.log('# this is problem 1')

  // pobi case
  if (check(pobi) === false) {
    return -1
  }
  const pobiMax = findMax(pobi)

  // crong case
  if (check(crong) === false) {
    return -1
  }
  const crongMax = findMax(crong)


  if ( pobiMax > crongMax ) {
    return 1
  } else if ( pobiMax < crongMax ) {
    return 2
  } else if ( pobiMax === crongMax ) {
    return 0
  }
}

module.exports = problem1;
