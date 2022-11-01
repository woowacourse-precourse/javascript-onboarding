function problem5(money) {
  arr = []
  moneyType=[50000,10000,5000,1000,500,100,50,10,1]
  arr.push(parseInt(money/50000))
  money = money-arr[0]*50000
  arr.push(parseInt(money/10000))
  money = money-arr[1]*10000
  arr.push(parseInt(money/5000))
  money = money-arr[2]*5000
  arr.push(parseInt(money/1000))
  money = money-arr[3]*1000
  arr.push(parseInt(money/500))
  money = money-arr[4]*500
  arr.push(parseInt(money/100))
  money = money-arr[5]*100
  arr.push(parseInt(money/50))
  money = money-arr[6]*50
  arr.push(parseInt(money/10))
  money = money-arr[7]*10
  arr.push(parseInt(money))

  return arr
}

module.exports = problem5;
