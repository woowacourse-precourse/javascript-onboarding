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
  for (i = 0; i < word.length; i++) {
    for (j = 0; j < Object.keys(treefrogDic).length; j++) {
      if (word[i] == Object.keys(treefrogDic)[j]) {
        convertedWord.push(Object.values(treefrogDic)[j]);
      }
    }
  }
  return convertedWord;
};

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
