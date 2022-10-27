function problem2(cryptogram) {
  var answer;

  const decryptString = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
      for (let j = i + 1; j < string.length - 1; j++) {
        if (string[i] != string[j]) {
          break;
        }
        if (string[i] == string[j] && string[i] != string[j + 1]) {
          string = string.slice(0, i) + string.slice(j + 1);
          return decryptString(string);
        }
      }
    }
    return string;
  };

  answer = decryptString(string);
  return answer;
}

module.exports = problem2;
