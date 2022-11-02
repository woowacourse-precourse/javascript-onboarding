// 아스키코드를 기준으로 하는 청개구리 사전 객체
const treefrogDic = {};

for (i = 0; i < 26; i++) {
  treefrogDic[String.fromCharCode(65 + i)] = String.fromCharCode(90 - i);
}
for (i = 0; i < 26; i++) {
  treefrogDic[String.fromCharCode(97 + i)] = String.fromCharCode(122 - i);
}

// 단어를 청개구리 사전을 기준으로 변환해주는 기능
const convertToTreefrog = (word) => {
  let convertedWord = [];
  const alphabet = /[a-zA-Z]/;
  for (i = 0; i < word.length; i++) {
    if (alphabet.test(word[i])) {
      for (j = 0; j < Object.keys(treefrogDic).length; j++) {
        if (word[i] == Object.keys(treefrogDic)[j]) {
          convertedWord.push(Object.values(treefrogDic)[j]);
        }
      }
    } else {
      convertedWord.push(word[i]);
    }
  }
  return convertedWord;
};

function problem4(word) {
  var answer;
  // 공백 기준으로 문자열을 분할해 청개구리 사전을 통해 변환하는 기능
  let wordArr = [];
  wordArr = word.split(" ");
  for (k = 0; k < wordArr.length; k++) {
    wordArr[k] = convertToTreefrog(wordArr[k]);
  }
  // 변환된 단어를 하나의 문장으로 합쳐 반환하는 기능
  for (l = 0; l < wordArr.length; l++) {
    for (m = 0; m < wordArr[l].length; m++) {
      answer += wordArr[l][m];
    }
    if (l != wordArr.length - 1) {
      answer += " ";
    }
  }
  answer = answer.substring(9);
  return answer;
}

module.exports = problem4;
