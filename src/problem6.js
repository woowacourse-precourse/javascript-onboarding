// 기능 목록
// 1. 모든 크루의 닉네임을 2글자 단위로 자르기
// 2. 2글자로 자른 닉네임들을 nameCount 객체에 저장 및 값 증가 ex) {제이: 1, 이엠: 1}
// 3. nameCount에서 값이 2이상인 문자열 찾기
// 4. 3에서 찾은 값들을 포함한 크루 찾기
// 5. answer를 기준으로 오름차순으로 정렬하고, 중복 제거

function problem6(forms) {
  // 2글자로 자른 닉네임을 담은 배열
  let namesArr = [];

  for (let i = 0; i < forms.length; i++) {
    let arr = [];
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      let name = forms[i][1].slice(j, j + 2);
      arr.push(name);
    }
    namesArr.push(arr);
  }
}

module.exports = problem6;
