function problem4(word) {
  var answer;
  answer = "";
  let dic1 = {};
  let dic2 = {};

  // 알파벳 순서대로 매개변수 저장
  for (i = 97; i <= 122; i++) {
    //소문자 저장
    dic1[String.fromCharCode(i)] = String.fromCharCode(219 - i);
    //대문자 저장
    dic2[String.fromCharCode(i - 32)] = String.fromCharCode(219 - i - 32);
  }

  for (i = 0; i < word.length; i++) {
    // 소문자일 경우
    if (dic1[word[i]]) {
      answer += dic1[word[i]];
    }
    // 대문자일 경우
    else if (dic2[word[i]]) {
      answer += dic2[word[i]];
    }
    //그 외 문자일 경우
    else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
