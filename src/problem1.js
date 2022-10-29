function problem1(pobi, crong) {
  if(isError(pobi) || isError(crong)){
    return -1
  }
  const pobiArray = pobi.map((number) => splitNumber(number))
  const crongArray = crong.map((number) => splitNumber(number))

  const pobiScore = findBiggerBetweenLeftPageAndRightPage(pobiArray)
  const crongScore = findBiggerBetweenLeftPageAndRightPage(crongArray)

  return compareScores(pobiScore, crongScore)
}

function isError(pageArray){
  const [leftPageNum, rightPageNum] = pageArray
  if((rightPageNum - leftPageNum) !== 1){
    return true
  } else if(leftPageNum%2 !== 1){
    return true
  }
  return false
}

function splitNumber(arg){
  return Array.from(String(arg), (_) => Number(_))
}

function findBiggerBetweenAddAndMultiple(args){
  return Math.max(args.reduce((acc, cur) => acc+cur, 0), args.reduce((acc, cur) => acc*cur, 1))
}

function findBiggerBetweenLeftPageAndRightPage(args){
  return Math.max(...args.map((element) => findBiggerBetweenAddAndMultiple(element)))
}

function compareScores(score1, score2){
  if(score1 > score2){
    return 1
  } else if(score1 === score2){
    return 0
  } else {
    return 2
  }
}

module.exports = problem1;
