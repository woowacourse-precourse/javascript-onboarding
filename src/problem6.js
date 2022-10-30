const EMAIL = 0;
const NICK_NAME = 1;

function isLengthOne(nickname) {
  return nickname.length === 1;
}

function makeCheckWordList(nickname) {
  const result = [];
  for (let i = 2; i <= nickname.length; i++) {
    let start = 0;
    let end = start + i - 1;

    while (end < nickname.length) {
      result.push(nickname.substr(start, i));
      start++;
      end++;
    }
  }

  return result;
}

function problem6(forms) {
  var answer = [];
  const isDuplicate = new Array(forms.length).fill(0);

  for (let i = 0; i < forms.length; i++) {
    const nickName = forms[i][NICK_NAME];
    // 길이가 1인 문자열 단어일 경우
    if (isLengthOne(nickName)) {
      for (let j = 0; j < forms.length; j++) {
        if (i == j) continue;
        if (isDuplicate[j] === 1) continue;
        if (forms[i][NICK_NAME] === forms[j][NICK_NAME]) {
          isDuplicate[i] = 1;
          isDuplicate[j] = 1;
        }
      }
    }
    // 길이가 2인 문자열인 경우
    else {
      const checkWordList = makeCheckWordList(nickName);
      for (let j = 0; j < forms.length; j++) {
        const targetNickname = forms[j][NICK_NAME];
        if (isDuplicate[j] === 1) continue;
        if (i == j) continue;
        for (let t = 0; t < checkWordList.length; t++) {
          if (targetNickname.includes(checkWordList[t])) {
            console.log("포함됩니다.", targetNickname);
            isDuplicate[i] = 1;
            isDuplicate[j] = 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < isDuplicate.length; i++) {
    if (isDuplicate[i] === 1) {
      answer.push(forms[i][EMAIL]);
    }
  }

  answer.sort();

  return answer;
}

module.exports = problem6;
