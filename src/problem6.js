function problem6(forms) {
  let answer = [];
  const nickNames = {};
  const regex = /^[A-Za-z0-9]{2,10}@email.com/; // 이메일 형식 체크를 위한 정규표현식
  forms.forEach((form) => {
    const [email, nickName] = form;
    if (!checkEmail(regex, email)) return; // 이메일 형식에 부합하지 않으면 해당 이메일을 스킵한다.
    if (nickName.length === 1) return; // 닉네임이 한 글자면 연속되는 글자가 없으므로 제외한다.
    splitWord(nickName).forEach((split) => {
      if (!Object.keys(nickNames).includes(split)) {
        nickNames[split] = email;
      } else {
        if (!answer.includes(nickNames[split])) answer.push(nickNames[split]);
        answer.push(email);
      }
    });
  });

  return answer.sort();
}

//단어를 나눌수 있는 모든 경우의 수를 구한다.
function splitWord(word) {
  let wordList = [];

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 2; j <= word.length; j++) {
      let split = word.slice(i, j);
      wordList.push(split);
    }
  }

  return wordList;
}

// 이메일 형식인지 체크한다.
function checkEmail(regex, email) {
  return regex.test(email);
}

module.exports = problem6;
