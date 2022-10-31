function problem4(word) {
  let answer = "";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const translate = {}; //알파벳 반대로 번역해줄 객체 생성

  //알파벳을 반대로 번역해주기 위한 key:value 생성
  for (let i = 0; i < lowerAlphabet.length; i++) {
    const key = lowerAlphabet[i];
    const value = lowerAlphabet[lowerAlphabet.length - 1 - i];
    translate[key] = value;
  }
  for (let i = 0; i < upperAlphabet.length; i++) {
    const key = upperAlphabet[i];
    const value = upperAlphabet[upperAlphabet.length - 1 - i];
    translate[key] = value;
  }

  const reg = /^[a-z]|[A-Z]$/; //알파벳인지 체크하기 위한 정규식

  for (let s of word) {
    if (reg.test(s)) {
      answer += translate[s]; //정규식을 통과할 시 번역해서 answer에 저장
      continue;
    }
    answer += s;
  }
  return answer;
}

module.exports = problem4;
