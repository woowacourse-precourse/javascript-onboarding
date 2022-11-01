// 전역변수 선언.
const UPPER_FIRST_CODE = "A".charCodeAt(0);
const UPPER_LAST_CODE = "Z".charCodeAt(0);
const LOWER_FIRST_CODE = "a".charCodeAt(0);
const LOWER_LAST_CODE = "z".charCodeAt(0); 

// 알파벳인지 아닌지
function checkAlphabet(Alphabet) {
  // let Alphabet = 'a';  // true
  // console.log(Alphabet.charCodeAt(0) >= UPPER_FIRST_CODE && Alphabet.charCodeAt(0) <= LOWER_LAST_CODE);
  return Alphabet.charCodeAt(0) >= UPPER_FIRST_CODE && Alphabet.charCodeAt(0) <= LOWER_LAST_CODE;
}

// 대문자인지 아닌지
function checkUpperClass(Alphabet) {
  // let Alphabet = 'A';  // true
  // console.log(Alphabet.charCodeAt(0) >= UPPER_FIRST_CODE && Alphabet.charCodeAt(0) <= UPPER_LAST_CODE);
  return Alphabet.charCodeAt(0) >= UPPER_FIRST_CODE && Alphabet.charCodeAt(0) <= UPPER_LAST_CODE
}

// 바뀐 알파벳코드 리턴.
function getReverseChar(Alphabet) {
  const alphabetCode = Alphabet.charCodeAt(0);

  //대문자면 ? 
  if (checkUpperClass(Alphabet))  {
    return UPPER_LAST_CODE - alphabetCode + UPPER_FIRST_CODE;
  //소문자면? 
  } else {
    return LOWER_LAST_CODE - alphabetCode + LOWER_FIRST_CODE;
  }

}

// 알파벳 코드를 가지고 알파벳을 리턴.
function getReverseWord(Alphabet) {
  if (Alphabet === " " || !checkAlphabet(Alphabet)) return Alphabet;

  return String.fromCharCode(getReverseChar(Alphabet));
}

function problem4(word) {

  // 모든 함수 실행 후 알파벳을 join 
  let answer = [...word].map((Alphabet) => getReverseWord(Alphabet)).join("");

  return answer;
}

// 1. 유니코드알아서 더하거나 빼주면 어떨까 생각중 ! 
// 2. 공백 여부 확인해 공백으로 return 하게끔! 

module.exports = problem4;