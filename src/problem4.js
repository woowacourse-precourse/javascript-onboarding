// 2022 Kimjungwon 우아한테크코스 문제풀이 4

function problem4(word) {
  //제한사항1. word는 길이가 1이상 1,000이하인 문자열이다.
  if (word.length < 1 || word.length > 1000) {
    return -1;
  }
  let answer = "";
  let tmpChr = "";

  //replace()사용해도 되지만 가독성을 위해서 if문을 사용
  //아스키코드를 사용하여 26개의 문자를 정수화시키고, -27과 절댓값을 통해서 문자를 거꾸로 만든다.
  //제한사항3. 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.
  for (let i = 0; i < word.length; i++) {
    if (String(word[i]).match(/[A-Z]/)) {
      tmpChr = String.fromCharCode(Math.abs(word.charCodeAt(i) - 64 - 27) + 64);
    }
    else if (String(word[i]).match(/[a-z]/)) {
      tmpChr = String.fromCharCode(Math.abs(word.charCodeAt(i) - 96 - 27) + 96);
    }
    //제한사항2. 알파벳 외의 문자는 변환하지 않는다.
    else {
      tmpChr = word[i];
    }
    answer += tmpChr;

  }
  return answer;
}
module.exports = problem4;
