/*
*요구사항
입력되는 문자를 청개구리 사전을 참고하여 해당하는 문자로 바꾸어라.
바꾼 결과값을 출력.

*해결전략
아스키코드를 이용해야겠다.
A~Z 는 65번부터 90번, a~z 는 97번부터 122번
우선, 대문자인지 소문자인지를 나눠주자.
대문자일경우,
주어지는 각 문자의 아스키코드값에서 65를 빼고 남은 숫자만큼을 90에서 빼어서
그 결과값을 아스키코드로 변환하여 저장시켜주면 되겠다.
소문자일 경우,
비슷하게 한다. 대신 65=>97, 90=>122으로 생각해서 풀면 되겠다.

*기능목록
1. 입력된 번호에 맞는 청개구리사전 문자를 return 시켜주는 함수. => frogDict function
*/

function problem4(word) {
  const [ASCII_A, ASCII_Z] = [65, 90];
  const [ASCII_a, ASCII_z] = [97, 122];

  function frogDict(num) {
    let frogDictKey = 0;
    if (num >= ASCII_A && num <= ASCII_Z)
      frogDictKey = ASCII_Z - (num - ASCII_A);
    else if (num >= ASCII_a && num <= ASCII_z)
      frogDictKey = ASCII_z - (num - ASCII_a);

    return String.fromCharCode(frogDictKey);
  }

  let result = "";
  word.split("").forEach((str) => {
    result += str !== " " ? frogDict(str.charCodeAt(0)) : " ";
  });

  return result;
}

module.exports = problem4;
