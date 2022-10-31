function decrypt(cryptogram) {
  const decrypted = [];

  [...cryptogram].forEach((char, index) => {
    if (cryptogram[index - 1] === char || cryptogram[index + 1] === char) {
      return;
    }
    decrypted.push(char);
  });

  return decrypted.join("");
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
