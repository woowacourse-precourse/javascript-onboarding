function problem2(cryptogram) {
  var answer;

  const decryptString = (string) => {
    let finishedDecryption = true;
    for (let i = 0; i < string.length - 1; i++) {
      for (let j = i + 1; j < string.length - 1; j++) {
        if (string[i] != string[j]) {
          break;
        }
        if (string[i] == string[j] && string[i] != string[j + 1]) {
          string = string.slice(0, i) + string.slice(j + 1);
          finishedDecryption = false;
          i = i - 1;
          break;
        }
      }
    }
    if (finishedDecryption) {
      return string;
    }
    return solution(string);
  };

  const solution = (cryptogram) => {
    if (cryptogram.length <= 1) {
      return cryptogram;
    }
    if (cryptogram.length == 2) {
      if (cryptogram[0] == cryptogram[1]) {
        return "";
      }
      return cryptogram;
    }
    answer = decryptString(cryptogram);
    return answer;
  };
  answer = solution(cryptogram);
  return answer;
}

module.exports = problem2;
