function problem6(forms) {
  let nicknameAnswer = [];
  let answer = [];

  // deque처럼 동작할 nickname 배열
  let nickname = [];

  // 닉네임만 담기
  for (form of forms) {
    nickname.push(form[1]);
  }
  // console.log(nickname); // [ '제이엠', '제이슨', '워니', '엠제이', '이제엠' ]

  
  for (let i = 0; i < nickname.length; i++) {
    let nick = nickname.shift();
    // console.log(nick); // 제이엠

    // 기능 1
    let tmpTwoLenNick = makeTwoLenNick(nick);
    // console.log(tmpTwoLenNick); // [ '제이', '이엠' ]

    // 기능 2
    tmpNicknameAnswer = checkCaseInNick(tmpTwoLenNick, nickname);
    // console.log(tmpNicknameAnswer); // [ '제이슨', '엠제이' ]

    // 기능 2를 통해 얻은 닉네임들을 nicknameAnswer 배열에 push
    for (let tmpNick of tmpNicknameAnswer) {
      nicknameAnswer.push(tmpNick);
    }
    // console.log(nicknameAnswer);

    nickname.push(nick);
  }

  // 닉네임 중복 제거
  nicknameAnswer = Array.from(new Set(nicknameAnswer));
  // console.log(nicknameAnswer);
  
  // 기능 3
  answer = makeEmailList(nicknameAnswer, forms);
  console.log(answer);
  

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
    // console.log(twoLenNick);

    for (nick of nickname) {
      if (nick.indexOf(twoLenNick) != -1) {
        // console.log("nick, twoLenNick: ", nick, twoLenNick);
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

forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"], ["jsb@email.com", "빨주노초파남보는무지개"]];
problem6(forms);


// module.exports = problem6;