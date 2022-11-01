// 문자를 유니코드로 변환하는 기능
const convertUnicode = (word) => {
  const result = word.map((char) => char.charCodeAt());
  return result;
};

// 알파벳 소문자 유니코드만 찾아 반대로 변환하는 기능
const reverseLowerCase = (word) => {
  const a = "a".charCodeAt();
  const z = "z".charCodeAt();
  const result = word.map((code) =>
    a <= code && code <= z ? z - (code - a) : code
  );
  return result;
};

// 알파벳 대문자 유니코드만 찾아 반대로 변환하는 기능
const reverseUpperCase = (word) => {
  const A = "A".charCodeAt();
  const Z = "Z".charCodeAt();
  const result = word.map((code) =>
    A <= code && code <= Z ? Z - (code - A) : code
  );
  return result;
};

// 유니코드를 다시 문자로 변환하는 기능
const convertCharacter = (word) => {
  const result = word.map((code) => String.fromCharCode(code));
  return result;
};

// solution
const solution = (word) => {
  const splittedWord = word.split("");
  const unicodeWord = convertUnicode(splittedWord);
  let reversedWord = reverseLowerCase(unicodeWord);
  reversedWord = reverseUpperCase(reversedWord);
  const convertedWord = convertCharacter(reversedWord);
  const joinedWord = convertedWord.join("");
  return joinedWord;
};

function problem4(word) {
  const answer = solution(word);
  return answer;
}

module.exports = problem4;
