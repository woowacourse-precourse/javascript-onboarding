function problem6(forms) {
  var answer = checkDuplication(forms);
  return answer;
}
// 중복 검사하기
function checkDuplication(forms) {
  let tmp = [];
  let test_slice = [];

  for (let i = 0; i < forms.length; i++) {
    tmp.push(separateString(forms[i]));
  }

  for (let i = 0; i < forms.length; i++) {
    test_slice.push(forms.slice(i + 1));
  }

  // 중복 검사
  let result = checkDuplicationNickName(test_slice, forms, tmp);

  // set을 배열로 변환
  let duplicationResult = setToArray(result);

  // 오름 차순 정렬
  return duplicationResult.sort();
}
// set()을 배열로 변경
function setToArray(duplicationList) {
  return Array.from(duplicationList);
}
// 중복 닉네임 찾아서 set()으로 생성
function checkDuplicationNickName(test_slice, forms, tmp) {
  let obj = {};
  let result = new Set();

  for (let i = 0; i < test_slice.length; i++) {
    for (let j = 0; j < test_slice[i].length; j++) {
      obj.name = forms[i][0];
      obj.dup = checkArray(i, test_slice[i][j], tmp);
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

  return array;
}

module.exports = problem6;
