function problem5(money) {
  var answer = []

  function sum(di){
    var temp = Math.floor(money/di)
  answer.push(temp)
  money -= di* temp
  }
  
  sum(50000)

  sum(10000)
  sum(5000)
  sum(1000)
  sum(500)
  sum(100)
  sum(50)
  sum(10)
  sum(1)
 return answer
}
console.log(problem5(50237))
module.exports = problem5;
