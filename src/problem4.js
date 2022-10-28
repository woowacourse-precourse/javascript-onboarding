function frogResult(alphabet) {
  let alphabetString = "abcdefjhijklmnopqrstuvwxyz";
  let index = alphabetString.indexOf(alphabet.toLowerCase());

  //알파벳이 아닌 경우
  if (index === -1) {
    return alphabet;
  }

  //대문자인 경우
  if (alphabet === alphabet.toUpperCase()) {
    return alphabetString
      .charAt(alphabetString.length - index - 1)
      .toUpperCase();
  }
  //소문자인 경우
  if (alphabet === alphabet.toLowerCase()) {
    return alphabetString.charAt(alphabetString.length - index - 1);
  }
}

function problem4(word) {
  var answer = "";

  for (alphabet of word) {
    console.log(frogResult(alphabet));
    answer = answer + frogResult(alphabet);
  }

  return answer;
}

module.exports = problem4;
