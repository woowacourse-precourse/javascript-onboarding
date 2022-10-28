function problem4(word) {
  let answer='';

  // 각 문자의 아스키값을 검사한다
  for (let alphabet of word) {
    // 알파벳의 아스키값을 통해 계산 _대소문자 따로
    let asciiCode=alphabet.charCodeAt(0)
    if (65<=asciiCode && asciiCode<=90) answer+=String.fromCharCode(90-(asciiCode-65));
    else if (97<=asciiCode && asciiCode<=122) answer+=String.fromCharCode(122-(asciiCode-97));
    else answer+=alphabet;
  }

  return answer;
}

module.exports = problem4;
