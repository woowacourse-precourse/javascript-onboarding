// 1. 반복문을 통해 아스키코드 값으로 객체 생성
// 1-1. 이때 키는 아스키코드의 값이 증가해야 하고, 값은 아스키코드의 값이 감소해야 한다.
// 1-2. 소문자 키는 소문자 값을 갖고, 대문자 키는 대문자 값을 가져야 한다.
// 2. 만들어둔 사전 객체에서 입력값을 갖고 있다면 사전 객체를 통해 변환한 값을 반환할 문자열에 추가하고, 입력값을 갖고 있지 않다면 반환할 문자열에 공백을 추가한다.
// 3. 결과 문자열을 반환

function problem4(word) {
  const dict = {};
  let result = '';

  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode(65 + i)] = String.fromCharCode(90 - i);
    dict[String.fromCharCode(97 + i)] = String.fromCharCode(122 - i);
  }

  for (let alphabet of word) {
    if (Object.keys(dict).includes(alphabet)) {
      result += dict[alphabet];
    } else {
      result += ' ';
    }
  }
  return result;
}

module.exports = problem4;
