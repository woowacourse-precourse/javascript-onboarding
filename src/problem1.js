function problem1(pobi, crong) {

  var answer;

  if (isValid(pobi) && isValid(crong)){      
    const pobis = myScore(pobi)
    const crongs = myScore(crong)

    if(pobis - crongs > 0){
      answer = 1
    } else if (pobis - crongs < 0){
      answer = 2
    } else {
      answer = 0
    }
  } else {
    answer = -1
  }
  return answer

}


const isValid = (player) => {
  if(Math.abs(player[0] - player[1]) > 1){
    return false
  } else if(player[0] === 1 || player[1] === 400){
    return false
  } else {
    return true
  }
}

const _sum = (num) => {
  let tmp = 0
  do {
    tmp += num % 10
    num = Math.floor(num/10)
  } while (num > 0)
  return tmp
}

const _multiple = (num) => {
  let tmp = 1
  do {
    tmp *= num % 10
    num = Math.floor(num/10)
  } while (num > 0)
  return tmp
}

const biggestNum = (num1, num2) => {
  if(num1 - num2 > 0) {
    return num1
  } else {
    return num2
  }
}

const myScore = (player) => {
  const arr = []
  player.map((item)=> {
    arr.push(biggestNum(_sum(item), _multiple(item)))
  })
  return biggestNum(arr[0], arr[1])
}




module.exports = problem1;
