function problem6(forms) {
  var answer;
  return answer;
}

// 중복 닉네임 찾아서 set()으로 생성
function checkDuplicationNickName(test_slice, forms, tmp) {
  let obj = {};
  let result = new Set();

  for (let i = 0; i < test_slice.length; i++) {
    for (let j = 0; j < test_slice[i].length; j++) {
      obj.name = forms[i][0];
      obj.dup = checkArray(i, test_slice[i][j], tmp);
      console.log(obj);
      // dup에 값이 있으면 이름 저장해라
      if (obj["dup"] !== undefined) {
        result.add(obj.name);
        result.add(obj.dup);
      }
    }
  }
  return result;
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
