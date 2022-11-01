/* 
1. 1~number 숫자를 각각 문자열로 변환 후 배열에 넣어 split
2. numberArr에서  3, 6, 9 포함한 문자만 걸러낸다.
*/
function problem3(number) {
  const numberArr = String([...Array(number + 1).keys()]).split("");

  return findArr.length;
}

module.exports = problem3;
