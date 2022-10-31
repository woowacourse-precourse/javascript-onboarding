function problem1(pobi, crong) {
  var answer;
 
  return answer;
}


// number를 각 자리 수로 나누어 array배열에 삽입
function makeNumDigits(num) {
  num = num.toString();
  let array = [];
  for (let i = 0; i < num.length; i++) {
    array.push(Number(num[i]));
  }
  return array;
}

module.exports = problem1;
