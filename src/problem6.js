function problem6(forms) {
  var answer;
  return answer;
}
// 중복값 찾기
function checkArray(i, forms, array) {
  for (let j = 0; j < array[i].length; j++) {
    if (forms[1].includes(array[i][j]) === true) {
      console.log(forms[1]);
      return forms[0];
    }
  }
}
// 문자열을 2글자씩 나누기
function separateString(string) {
  let array = [];

  for (let i = 0; i < string[1].length - 1; i++) {
    array.push(string[1].substr(i, 2));
  }

  console.log(array);

  return array;
}

module.exports = problem6;
