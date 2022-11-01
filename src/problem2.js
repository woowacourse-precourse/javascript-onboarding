const isCryptogram = (cryptogram) => {
  const lowerCaseStr = cryptogram.toLowerCase();
  if (cryptogram.length < 1 ) return false;
  if (cryptogram.length > 1000) return false;
  if (cryptogram !== lowerCaseStr) return false;
  return true;
}

const removeDuplicatedAlphabet = (cryptogram) => {
  let alphabetArr = [...cryptogram];
  let answer = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (alphabetArr[i] == alphabetArr[i + 1]) {
      i = i + 1;
    } else {
      if (alphabetArr[i] == alphabetArr[i - 1]) continue;
      else {
        if (alphabetArr[i] == answer[answer.length - 1])
          answer = answer.slice(0, -1);
        else {
          answer.push(alphabetArr[i]);
        }
      }
    }
  }
  return answer.join("");
};

function problem2(cryptogram) {
  let result = removeDuplicatedAlphabet(cryptogram);

  if (!isCryptogram(cryptogram)) { throw Error("1이상 1000이하 길이의 알파벳 소문자 문자열을 입력해주세요.") }
  else return result;
}

module.exports = problem2;