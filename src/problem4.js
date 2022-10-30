function problem4(word) {
  let answer = "";
  // 알파벳을 A부터 Z까지 생성
  const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  // 참조 타입의 완전 복사를 위해 스프레드 문법 사용
  const reverseArr = [...arr].reverse();
  let obj = {};
  // Key에는 알파벳 Value에는 반대 알파벳을 객체에 넣음
  arr.forEach((el, i) => {
    obj[el] = reverseArr[i];
    obj[el.toLowerCase()] = reverseArr[i].toLowerCase();
  });
  // for in 문을 사용하여 word의 알파벳을 확인하여 반대 알파벳을 answer에 넣어줌
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      answer += " ";
    } else {
      for (let key in obj) {
        if (word[i] === key) {
          answer += obj[key];
        }
      }
    }
  }
  return answer;
}

module.exports = problem4;
