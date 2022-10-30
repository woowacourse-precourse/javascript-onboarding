function problem3(number) {
  var answer;
  let stringNum = '';
  let count = 0;

  for(let i = 1; i <= number; i++) {
    stringNum += i;
  }
  for(let k = 0; k < stringNum.length; k++) {
    if(['3', '6', '9'].includes(stringNum[k])) {
      count++;
    }
  }
  answer = count;
  
  return answer;
}
module.exports = problem3;

// 1. number 까지의 모든 숫자를 하나의 문자열로 만들기
// 2. for문을 돌며 각 문자가 3, 6, 9 에 해당하는지 체크하기
