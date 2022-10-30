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
