function problem5(money) {
  var answer = new Array(9).fill(0)
  const wallet = [50000,10000,5000,1000,500,100,50,10,1]

  for (let currency of wallet){
    let idx = wallet.indexOf(currency)
    answer[idx] = Math.floor(money/currency)
    money -= currency * Math.floor(money/currency)
  }
  return answer
}

module.exports = problem5;
