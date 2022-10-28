const transformAlpabat = (asciiNum, a_ascii) => {
  let interval = asciiNum - a_ascii;
  return a_ascii - interval + 25;
}

const findAlpabat = (asciiNum) => {
  if(65 <= asciiNum && asciiNum <= 90)        // 대문자
    return String.fromCharCode(transformAlpabat(asciiNum, 65));
  else if(97 <= asciiNum && asciiNum <= 122)  // 소문자
    return String.fromCharCode(transformAlpabat(asciiNum, 97));
  else if(asciiNum == 32) // 스페이스
    return " ";
  return "";
}

function problem4(word) {
  let answer = "";
  for(let i = 0; i<word.length; i++) {
    answer += findAlpabat(word.charCodeAt(i));
  }

  return answer;
}

module.exports = problem4;
