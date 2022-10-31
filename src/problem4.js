function problem4(word) {
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    const letterType = getType(letter);

    // 대문자, 소문자, 그 외의 문자마다 다르게 변환하여 저장한다
    switch (letterType) {
      case "capital":
        answer += convertCapitalLetter(letter);
        break;

      case "small":
        answer += convertSmallLetter(letter);
        break;

      case "none":
        answer += letter;
        break;
    }
  }

  return answer;
}

module.exports = problem4;

// 대문자를 청개구리 사전에 따라 변환하는 함수
function convertCapitalLetter(letter) {
  const asciiA = "A".charCodeAt(0); // "A"의 아스키코드 : 65
  const asciiZ = "Z".charCodeAt(0); // "Z"의 아스키코드

  // 해당 문자의 아스키코드
  const asciiLetter = letter.charCodeAt(0);

  // A를 기준으로 몇칸 뒤에 있는지
  const gap = asciiLetter - asciiA;

  // gap만큼 Z에서부터 뒤로 오면 된다
  return String.fromCharCode(asciiZ - gap);
}

// 소문자를 청개구리 사전에 따라 변환하는 함수
function convertSmallLetter(letter) {
  const asciia = "a".charCodeAt(0); // "a"의 아스키코드 : 97
  const asciiz = "z".charCodeAt(0); // "z"의 아스키코드

  // 해당 문자의 아스키코드
  const asciiLetter = letter.charCodeAt(0);

  // a를 기준으로 몇칸 뒤에 있는지
  const gap = asciiLetter - asciia;

  // gap만큼 z에서부터 뒤로 오면 된다
  return String.fromCharCode(asciiz - gap);
}

// 특정 문자가 어느 부류에 속하는지 반환하는 함수
function getType(letter) {
  // 영어 소문자
  if (letter.match(/[a-z]/)) return "small";
  // 영어 대문자
  if (letter.match(/[A-Z]/)) return "capital";
  // 그 외
  return "none";
}