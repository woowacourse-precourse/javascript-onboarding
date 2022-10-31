/*
  기능구현 목록
  1. 아스키코드를 이용하기 위해 소문자 a,z일 때 값과, 대문자 A,Z일 때 값을 각 변수로 저장하고 공백은 대문자 A와 소문자 a의 차를 이용하여 구함.
  2. 반복문을 통하여 word의 대소문자를 판별 후 소문자인 경우 LowCheck 변수에 현재 word 문자를 아스키 코드로 변환 후 ASCII_z 와 차를 구한 후 ASCII_a와 더해주면 청개구리 사전의 문자가 나온다.
  3. 대문자도 2. 과정과 같음.
  4. 2. 3. 의 결과값은 새롭게 만든 newWord에 문자로 변한 후 push하여 저장.
  5. UpCheck의 값을 기준으로 값 123 이 나오면 공백이 나왔으므로 이를 문자로 변환 후 push함.
  6. 모든 반복이 끝나면 newWord를 join 함수를 이용하여 하나의 문자열로 만든 후 번환함.
*/
function problem4(word) {
  const newWord = [];
  const ASCII_A = 65;
  const ASCII_a = 97;
  const ASCII_Z = 90;
  const ASCII_z = 122;
  const ASCII_Space = ASCII_a - ASCII_A;

  let UpCheck, LowCheck;
  for (let i = 0; i < word.length; i++) {
    if (!(word[i] === word[i].toUpperCase())) {
      LowCheck = ASCII_a + ((ASCII_z) - word[i].charCodeAt(0));
      newWord.push(String.fromCharCode(LowCheck));
      continue;
    }

    UpCheck = ASCII_A + ((ASCII_Z) - word[i].charCodeAt(0));
    if (!(UpCheck === (ASCII_A + ASCII_Z) - ASCII_Space)) {
      newWord.push(String.fromCharCode(UpCheck));
      continue;
    }
    newWord.push(String.fromCharCode(ASCII_Space));
  }
  return newWord.join("");
}

module.exports = problem4;
