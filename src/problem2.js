const decrypt = (code) => {
  const result = [];
  let word = code[0];
  let count = 1;
  for (let i = 1; i < code.length; i++) {
    if (code[i] === word) {
      count++;
    } else {
      if (count === 1) {
        result.push(word);
      }
      word = code[i];
      count = 1;
    }
  }
  if (count === 1) {
    result.push(word);
  }
  return result.join("");
};

function problem2(cryptogram) {
  var answer;
  let code = cryptogram;

  while (answer !== decrypt(code)) {
    code = decrypt(code);
    answer = code;
  }

  return answer;
}

module.exports = problem2;
