function checkAlphabet(ascii) {
  if (ascii >= 65 && ascii <= 90) return true;
  else if (ascii >= 97 && ascii <= 122) return true;
  else return false;
}

function convertFrog(ascii) {
  let convertedAscii;
  if (ascii >= 65 && ascii <= 90) {
    convertedAscii = 90 - (ascii - 65);
  } else if (ascii >= 97 && ascii <= 122) {
    convertedAscii = 122 - (ascii - 97);
  }
  return convertedAscii;
}

function problem4(word) {
  let answer = "";
  for (let x of word) {
    let ascii = x.charCodeAt(0);
    const checkedAlphabet = checkAlphabet(ascii);
    if (ascii === 32) {
      answer += " ";
      continue;
    }
    if (!checkedAlphabet) {
      answer += String.fromCodePoint(x);
      continue;
    }
    const frogValue = convertFrog(ascii);
    answer += String.fromCodePoint(frogValue);
  }
  return answer;
}

module.exports = problem4;
