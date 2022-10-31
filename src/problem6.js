function problem6(forms) {
  const nicknames = [];
  const emails = [];

  forms.map((list) => {
    emails.push(list[0]);
    nicknames.push(list[1]);
  });

  if (nicknameCheck(nicknames).length) {
    return console.log(`닉네임 ${nicknameCheck(nicknames)}가 형식에 맞지 않습니다.`);
  }

  if (emailCheck(emails).length) {
    return console.log(`이메일 ${emailCheck(emails)}가 형식에 맞지 않습니다.`);
  }

  const splitLetter = nicknames
    .map((nickname) =>
      nickname
        .split("")
        .map((letters, idx, nickname) => letters + nickname[idx + 1])
        .slice(0, -1)
    )
    .flat();

  const dupleArr = dupleItem(splitLetter);

  var answer = [];
  forms.map((arr) => {
    for (let i = 0; i < dupleArr.length; i++) {
      if (arr[1].includes(dupleArr[i])) {
        answer.push(arr[0]);
      }
    }
  });

  answer = answer.sort();

  return answer;
}

const nicknameCheck = (arr) => {
  const regExp = /^([가-힣]){1,19}$/gm;
  let result = [];
  arr.map((nickname) => {
    if (!nickname.match(regExp)) {
      result.push(nickname);
    }
  });

  return result;
};

const emailCheck = (arr) => {
  const regExp = /^[a-z0-9가-힣]{1,9}@email.com/gm;
  let result = [];

  arr.map((email) => {
    if (!email.match(regExp)) {
      result.push(email);
    }
  });

  return result;
};

const dupleItem = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }
  result = [...new Set(result)];

  return result;
};

module.exports = problem6;
