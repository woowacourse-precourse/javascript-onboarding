function problem5(money) {
  var answer;
  console.log('this is problem 5')
    // 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전

  let moneyArr = [0,0,0,0,0,0,0,0,0]
  for ( let i = 0 ; i < moneyArr.length ; i ++) {
    if ( i === 0) {
      moneyArr[i] = parseInt(money / 50000)
      money = money % 50000
    } else if ( i === 1 ) {
      moneyArr[i] = parseInt(money / 10000)
      money = money % 10000
    } else if ( i === 2 ) {
      moneyArr[i] = parseInt(money / 5000)
      money = money % 5000
    } else if ( i === 3 ) {
      moneyArr[i] = parseInt(money / 1000)
      money = money % 1000
    } else if ( i === 4 ) {
      moneyArr[i] = parseInt(money / 500)
      money = money % 500
    } else if ( i === 5 ) {
      moneyArr[i] = parseInt(money / 100)
      money = money % 100
    } else if ( i === 6 ) {
      moneyArr[i] = parseInt(money / 50)
      money = money % 50
    } else if ( i === 7 ) {
      moneyArr[i] = parseInt(money / 10)
      money = money % 10
    } else if ( i === 8 ) {
      moneyArr[i] = parseInt(money / 1)
      money = money % 1
    }
  }
  answer = moneyArr
  return answer;
}

module.exports = problem5;
