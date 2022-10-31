function problem6(forms) {
  let answer = [];
  const regex = /^[A-Za-z0-9]{2,10}@email.com/; // 이메일 형식 체크를 위한 정규표현식

  return answer;
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
