function problem5(money) {
  let result = new Array(9).fill(0)
  
  for (let i = 0; i < change.length; i++) {
    result[i] = Math.floor(money / change[i])
    money %= change[i]
  } 
  
  return result
}

const change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

module.exports = problem5;
