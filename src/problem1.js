function problem1(pobi, crong) {
  var answer
  var pobiNum = 0
  var crongNum = 0 
  
  //errcheck
  if (pobi[0] != pobi[1]-1 || crong[0] != crong[1]-1){
    return -1
  }


  pobi.forEach(function (number) { 
    var temp = number
    var sum = 0
    var mult = 1

    while (temp > 0) {
      sum += temp % 10
      mult *= temp % 10
      temp = parseInt(temp / 10)
    }
    pobiNum = Math.max(pobiNum, sum, mult)

  }
  )

  crong.forEach(function (number) {
    var temp = number
    var sum = 0
    var mult = 1

    while (temp > 0) {
      sum += temp % 10
      mult *= temp % 10
      temp = parseInt(temp / 10)
    }
    crongNum = Math.max(crongNum, sum, mult)

  }
  )

  // console.log(pobiNum, crongNum)
  if (pobiNum > crongNum) {
    answer = 1
  }else if (pobiNum < crongNum) {
    answer = 2
  }else if (pobiNum == crongNum) {
    answer = 0
  } 

  return answer
}   

module.exports = problem1

// 숫자가 주어짐 //
// 임의의수와 임의의수+1 의 각각 각 자릿수의 합 또는 곱중 가장큰수를 구한다
// 포비와 크롱의 대표숫자를 서로 비교한다
// 결과에 따라 1 2 0 -1 을 리턴한다