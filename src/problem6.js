// 기능 추가 목록
// - nickname&email 담은 객체 생성
// - 닉네임 부분 문자열 객체를 만드는 함수 생성
// - 부분문자열의 길이를 결정하는 함수 생성
// - 부분문자열 객체 생성하는 함수 실행
// - 중복되는 닉네임 판별
// - 이메일 오름차순 정렬

function problem6(forms) {
  const nickNameEmail = {};
  const subStringObj = {};
  const selectedEmail = [];

  forms.forEach((element) => {
    const EMAIL = element[0];
    const NICK_NAME = element[1];

    if (!(NICK_NAME in nickNameEmail)) {
      nickNameEmail[NICK_NAME] = [];
    }
    nickNameEmail[NICK_NAME].push(EMAIL);
  });

  function addSubString(strLength, nickName) {
    let start = 0;
    let end = 0 + strLength;
    while (end <= nickName.length) {
      const subString = nickName.slice(start, end);
      if (subString in subStringObj) {
        subStringObj[subString][0].push(nickName);
        subStringObj[subString][1] += 1;
      } else {
        subStringObj[subString] = [[], 1];
        subStringObj[subString][0].push(nickName);
      }
      start += 1;
      end += 1;
    }
  }

  function splitNickname(nickName) {
    for (let i = 2; i < nickName.length + 1; i++) {
      addSubString(i, nickName);
    }
  }

  forms.forEach((element) => {
    splitNickname(element[1]);
  });

  for (subStirng in subStringObj) {
    if (subStringObj[subStirng][1] > 1) {
      subStringObj[subStirng][0].forEach((nickNames) => {
        nickNameEmail[nickNames].forEach((email) => {
          selectedEmail.push(email);
        });
      });
    }
  }
  const setSelectedEmail = new Set(selectedEmail);
  const answer = Array.from(setSelectedEmail);
  answer.sort();

  return answer;
}

module.exports = problem6;
