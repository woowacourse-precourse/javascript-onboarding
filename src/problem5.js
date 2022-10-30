function problem5(money) {
  var unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  unit_index = 0
  while (unit_index <= answer.length){
    while (true){
      if (money >= unit[unit_index]){
        money = money - unit[unit_index]
        answer[unit_index] = answer[unit_index] + 1
      } else {
        break
      }
    }
    unit_index = unit_index + 1
  }  
  return answer;
}

module.exports = problem5;
