function problem5(money) {
  const arr = [50000,10000,5000,1000,500,100,50,10,1]
  let count = new Array(9).fill(0)

  arr.forEach((value,index) => {
    count[index] = Math.floor(money/value)
    money -= value*Math.floor(money/value)
  })

  return count
}

module.exports = problem5;

//오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return
//50000
//10000
//5000
//1000
//500
//100
//50
//10
//1