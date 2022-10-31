// 기능 추가 목록
// - nickname&email 담은 객체 생성
// - 닉네임 부분 문자열 객체를 만드는 함수 생성
// - 부분문자열의 길이를 결정하는 함수 생성
// - 부분문자열 객체 생성하는 함수 실행
// - 중복되는 닉네임 판별
// - 이메일 오름차순 정렬

function problem6(forms) {
  const nickNameEmail = {};
  const strPart = {};

  forms.forEach((element) => {
    nickNameEmail[element[1]] = element[0];
  });

  function saveString(strLength, nickName) {
    let start = 0;
    let end = 0 + strLength;
    while (end <= nickName.length) {
      const checkStr = nickName.slice(start, end);
      if (checkStr in strPart) {
        strPart[checkStr][0].push(nickName);
        strPart[checkStr][1] += 1;
      } else {
        strPart[checkStr] = [[], 1];
        strPart[checkStr][0].push(nickName);
      }
      start += 1;
      end += 1;
    }
  }

  function splitNickname(nickName) {
    for (let i = 2; i < nickName.length + 1; i++) {
      saveString(i, nickName);
    }
  }

  return answer;
}

module.exports = problem6;
