function problem6(forms) {
  let nicknameAnswer = [];
  let answer = [];

  // deque처럼 동작할 nickname 배열
  let nickname = [];

  // 닉네임만 담기
  for (form of forms) {
    nickname.push(form[1]);
  }
  
  for (let i = 0; i < nickname.length; i++) {
    let nick = nickname.shift();

    // 기능 1
    let tmpTwoLenNick = makeTwoLenNick(nick);

    // 기능 2
    tmpNicknameAnswer = checkCaseInNick(tmpTwoLenNick, nickname);

    // 기능 2를 통해 얻은 닉네임들을 nicknameAnswer 배열에 push
    for (let tmpNick of tmpNicknameAnswer) {
      nicknameAnswer.push(tmpNick);
    }

    nickname.push(nick);
  }

  // 닉네임 중복 제거
  nicknameAnswer = Array.from(new Set(nicknameAnswer));
  
  // 기능 3
  answer = makeEmailList(nicknameAnswer, forms);
  
  // 이메일 오름차순 정렬
  answer.sort();

  return answer;
}

// 기능 1. 한 닉네임의 모든 두 글자 case가 담긴 배열 생성
function makeTwoLenNick(nick) {
  let twoLenNick = [];
  const nickLen = nick.length;

  for (let i = 0; i < nickLen - 1; i++) {
    tmp = nick.slice(i, i + 2);
    twoLenNick.push(tmp);
  }

  return twoLenNick;
}

// 기능 2. 두 글자 case들이 nickname 리스트의 요소들과 중복이 발생하는지 체크
function checkCaseInNick(tmpTwoLenNick, nickname) {
  let tmpNicknameAnswer = [];

  for (twoLenNick of tmpTwoLenNick) {
    for (nick of nickname) {
      if (nick.indexOf(twoLenNick) != -1) {
        tmpNicknameAnswer.push(nick);
      }
    }
  }

  return tmpNicknameAnswer;
}

// 기능 3. 닉네임에 대응하는 이메일 목록 만들기
function makeEmailList(nicknameAnswer, forms) {
  let answer = [];
  for (nickname of nicknameAnswer) {
    for (form of forms) {
      if (form[1] == nickname) {
        answer.push(form[0]);
      }
    }
  }

  return answer;
}

module.exports = problem6;