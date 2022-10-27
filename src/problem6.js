function problem6(forms) {
  let nicknameAnswer = [];
  let answer = [];

  // deque처럼 동작할 nickname 배열
  let nickname = [];

  // 닉네임만 담기
  for (form of forms) {
    nickname.push(form[1]);
  }
  console.log(nickname); // [ '제이엠', '제이슨', '워니', '엠제이', '이제엠' ]

  
  for (let i = 0; i < nickname.length; i++) {
    let nick = nickname.shift();
    console.log(nick); // 제이엠

    // 기능 1
    let tmpTowLenNick = makeTwoLenNick(nick);
    console.log(tmpTowLenNick); // [ '제이', '이엠' ]

    nickname.push(nick);
  }

  
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


forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"], ["jsb@email.com", "빨주노초파남보는무지개"]];
problem6(forms);


// module.exports = problem6;