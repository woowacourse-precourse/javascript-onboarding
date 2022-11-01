function problem6(forms) {
  var answer;
  return answer;
}

function errorHandler(forms) {
  /* forms의 크기가 10000보다 큰 경우
  나머지 예외처리는 실행 과정에서 처리 */
  if (forms.length > 10000) return true;
  else return false;
}

// 이름 쪼개는 함수
function spliceName(forms) {
  // 이름을 담을 배열
  let nameArr = [];

  // 2글자씩 이름을 쪼개 새 배열에 저장
  forms.map(([_, name]) => {
    for (i=0; i<name.length - 1; i++) {
      nameArr.push(name[i] + name[i+1]);
    }
  });

  searchOverlap(nameArr);
}

// 중복문자 찾는 함수
function searchOverlap(nameArr) {
  let overlapArr = [];

  // 중복문자 새 배열에 저장
  nameArr.filter((item, index) => {
    // 이름 배열에서 중복되는 문자를 새 배열에 저장
    if (nameArr.indexOf(item) !== index)  overlapArr.push(item);
  });

  return overlapArr;
}

module.exports = problem6;
