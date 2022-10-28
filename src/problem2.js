function problem2(cryptogram) {
  var answer;
  answer = decipher(cryptogram);
  return answer;
}

module.exports = problem2;

//문자를 배열로 변환후 중복제거 이후 다시 문자로 변경한다.
function decipher(word) {
  word.toLowerCase();
  const arr = word.split(""); // 문자를 배열로 취급

  const charArray = decrypto(arr);
  const key = charArray.join("");

  return key;
}

// 중복 문자를 제거하고 다시 처음부터 루프를 도는 for loop
function decrypto(arr) {
  const strArr = [...arr];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      strArr.splice(i, 2);
      i = -1;
    }
  }

  return strArr;
}
