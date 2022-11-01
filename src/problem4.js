// 아스키코드를 기준으로 하는 청개구리 사전 객체
const treefrogDic = {};

for (i = 0; i < 26; i++) {
  treefrogDic[String.fromCharCode(65 + i)] = String.fromCharCode(90 - i);
}
for (i = 0; i < 26; i++) {
  treefrogDic[String.fromCharCode(97 + i)] = String.fromCharCode(122 - i);
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
