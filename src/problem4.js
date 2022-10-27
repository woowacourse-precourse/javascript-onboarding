function problem4(word) {
  let answer = "";

  const dict = {"A":"Z", "B":"Y", "C":"X", "D":"W", "E":"V", "F":"U", "G":"T", "H":"S", "I":"R", "J":"Q", "K":"P", "L":"O", "M":"N", "N":"M", "O":"L", "P":"K", "Q":"J", "R":"I", "S":"H", "T":"G", "U":"F", "V":"E", "W":"D", "X":"C", "Y":"B", "Z":"A"}

  for (w of word) {
    // 기능 1
    answer += checkAndTransform(w);
  }

  console.log(answer);
  return answer;
}

// 기능 1. 문자 확인 후 변환하기
function checkAndTransform(w) {
  if (w in dict) { // 사전에 존재하는 경우
    return dict[w];
  } else {
    w = w.toUpperCase();
    if (w in dict) { // 대문자로 변환했을 때 사전에 존재한다면 = 소문자인 경우
      return dict[w].toLowerCase();
    } else { // 알파벳이 아닌 경우
      return w;
    }
  }
}

// problem4("abCCd!"); // zyXXw!

module.exports = problem4;