function problem4(word) {
  
  // 처음 answe은 빈 값
  answer = '';
  
  // 소문자 저장
  const lowerCase = [];
  
  // 대문자 저장
  const upperCase = [];

  // 소문자 매개변수 저장
  for (i = 97; i <= 122; i++) {
    lowerCase[String.fromCharCode(i)] = String.fromCharCode(219 - i);
  };
  
  //대문자 매개변수 저장
  for (i = 65; i <= 90; i++) {
    upperCase[String.fromCharCode(i)] = String.fromCharCode(155 - i);
  };

  // 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환
  for (i = 0; i < word.length; i++) {
    // 소문자가 들어올 경우
    if (lowerCase[word[i]]) {
      answer += lowerCase[word[i]];
    }
    // 대문자가 들어올 경우
    else if (upperCase[word[i]]) {
      answer += upperCase[word[i]];
    }
    // 예외처리
    else {
      answer += word[i];
    };
  };
  return answer;
}

module.exports = problem4;
