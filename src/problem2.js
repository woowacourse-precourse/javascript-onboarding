function problem2(cryptogram) {
  var answer;
  return answer;
}

function decryptor(str) {
  let newStr = '';
  let isDeleteWord = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      isDeleteWord ? (isDeleteWord = false) : (newStr += str[i]);
    } else {
      isDeleteWord = true;
    }
  }

  return newStr === str || newStr === '' ? newStr : decryptor(newStr);
}

module.exports = problem2;
