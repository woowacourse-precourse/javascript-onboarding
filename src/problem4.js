function problem4(word) {
  let answer;

  // console.log("워드입력",word)

  const dictionary = {};
  // 딕셔너리 생성

  for (i = 65; i < 91; i++) {
    dictionary[i] = 90 + 65 - i;
  }
  // 대문자 변환 테이블 생성

  for (j = 97; j < 123; j++) {
    dictionary[j] = 122 + 97 - j;
  }
  // console.log("테이블 확인",dictionary)
  // 소문자 변환 테이블 생성

  const new_word = [];
  for (k = 0; k < word.length; k++) {
    new_word.push(word.charCodeAt(k));
  }
  // console.log("아스키 변환확인",new_word)
  // 입력 단어 아스키 코드 변환

  const last_word = [];
  for (l = 0; l < new_word.length; l++) {
    const chr = new_word[l];
    if (chr in dictionary) {
      last_word.push(String.fromCharCode(dictionary[chr]));
    } else {
      last_word.push(String.fromCharCode(chr));
    }
  }
  // console.log("알파벳 변환확인",last_word)
  // 변환 단어 알파벳으로 변환

  answer = last_word.join('');
  // 변환 알파벳 단어로 변환

  return answer;
}

module.exports = problem4;
