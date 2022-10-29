function problem5(money) {
  if (invaild(money)) {
    return false;
  }

  var list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = new Array(list.length);

  for(var i = 0; i < list.length; i++) {
    var count = parseInt(money / list[i]);
    answer[i] = count;
    money -= (list[i] * count);
  }
  
  return answer;
}

/** number는 1 이상 10,000 이하인 자연수 확인하기 위한 함수*/
function invaild(money) {
  if (typeof money !== "number") {
    return true;
  } 
  if (money > 1000000 || money < 1) {
    return true;
  }
  return false;
}

console.log(problem5(50237));

module.exports = problem5;
