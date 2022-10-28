// 기능 목록
// 1. 모든 크루의 닉네임을 2글자 단위로 자르기
// 2. obj에 2글자로 자른 닉네임들은 키로, count는 값으로 저장 ex) {제이: 1, 이엠: 1}
// 3. obj에서 값이 2이상인 문자열 찾기
// 4. 3에서 찾은 문자열을 포함하고 있는 크루들의 이메일 찾기
// 5. answer를 기준으로 오름차순으로 정렬하고, 중복 제거

// 모든 크루의 닉네임을 2글자 단위로 자르는 함수
function makeNameTwoLength(forms) {
  let namesArr = [];

  for (let i = 0; i < forms.length; i++) {
    let arr = [];
    let name = forms[i][1];
    for (let j = 0; j < name.length - 1; j++) {
      arr.push(name.slice(j, j + 2));
    }
    namesArr.push(arr);
  }

  return namesArr;
}

// obj에 2글자로 자른 닉네임들은 키로, count는 값으로 저장하는 함수
function countName(namesArr) {
  let obj = {};

  for (let i = 0; i < namesArr.length; i++) {
    for (let j = 0; j < namesArr[i].length; j++) {
      let name = namesArr[i][j];
      // obj에 키가 있을 경우
      if (obj.hasOwnProperty(name)) {
        obj[name] += 1;
        // obj에 키가 없을 경우
      } else obj[name] = 1;
    }
  }

  return obj;
}

// 중복되는 문자열 찾는 함수
function findDuplicate(nameCountObj) {
  for (let key in nameCountObj) {
    if (nameCountObj[key] >= 2) return key;
  }
}

function problem6(forms) {
  // 2글자로 자른 닉네임을 담은 배열
  let namesArr = makeNameTwoLength(forms);
  // 2글자로 자른 닉네임을 키로, count를 값으로 갖는 객체
  let nameCountObj = countName(namesArr);
  // 중복되는 문자열
  let duplicate = findDuplicate(nameCountObj);
  // 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일 목록
  let answer = [];

  // 중복되는 문자열 포함하고 있는 크루의 이메일 구하기
  namesArr.filter((el, i) => {
    if (el.includes(duplicate)) answer.push(forms[i][0]);
  });

  // answer를 기준으로 오름차순으로 정렬하기
  return answer.sort();
}

module.exports = problem6;
