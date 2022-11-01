function problem6(forms) {
  if (errorHandler(forms))  return "Error";

  var answer;
  answer = spliceName(forms);

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
  let overlapArr = [];
  let result = [];
  // 한글을 검사하기 위한 정규표현식
  check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  // 2글자씩 이름을 쪼개 새 배열에 저장
  forms.map(([_, name]) => {
    for (i=0; i<name.length - 1; i++) {
      // 한글 검사 후 한글이 아니면 공백처리
      if (!check.test(name))  name = "";

      nameArr.push(name[i] + name[i+1]);
    }
  });
  console.log(nameArr);

  overlapArr = searchOverlap(nameArr);
  // 이름 배열중에 겹치는 문자가 있을 경우
  for (i=0; i<overlapArr.length; i++) {
    forms.map(([email, nickname]) => {
      if (nickname.includes(overlapArr[i])) {
        // 도메인이 @email.com인 경우만 result에 push
        if (email.includes("@email.com")) result.push(email);
      }
    });
  }

  // 오름차순 정렬 후 return
  return result.sort();
}

// 중복문자 찾는 함수
function searchOverlap(nameArr) {
  let overlapArr = [];

  // 중복문자 새 배열에 저장
  nameArr.filter((item, index) => {
    // 중복문자가 존재하며 이미 추가된 단어가 아닐 경우
    if ((nameArr.indexOf(item) !== index) && !overlapArr.includes(item)){
      overlapArr.push(item);
    }
  });

  return overlapArr;
}

module.exports = problem6;