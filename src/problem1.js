function problem1(pobi, crong) {
  var answer;

  function plusSum(num){
    var sum = 0;
    while(num){
      sum += num % 10;
      sum /= 10;
    }
    return sum;
  }

  function multiSum(num){
    var sum = 1;
    while(num){
      sum *= num % 10;
      sum /= 10;
    }
    return sum;
  }

  return answer;
}

module.exports = problem1;
