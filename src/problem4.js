function reverseWord(word) {
  temp = [];
  for (let i = 0; i < word.length; i++) {
    // 1. 각 문자를 아스키코드로 변환
    // 2. 소문자, 대문자인지 확인 후 그에 맞게 아스키코드 값을 변경
    // 3. 그 소문자, 대문자가 아닌 아스키코드는 그대로 유지
    let ascii = word.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) {
      temp[i] = 90 - (ascii - 65);
    } else if (97 <= ascii && ascii <= 122) {
      temp[i] = 122 - (ascii - 97);
    } else {
      temp[i] = ascii;
    }
  }
  // 4. 아스키코드값 전체를 문자열로 변환
  return String.fromCharCode(...temp);
}

function problem4(word) {
  var answer;
  answer = reverseWord(word);
  return answer;
}

module.exports = problem4;

// 90 - (ascii - 65) 대문자
// 122 - (ascii - 97) 소문자
