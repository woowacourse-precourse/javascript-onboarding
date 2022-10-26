const decrypt = (code) => {
  return code.split("").reduce((acc, cur) => {
    return acc[acc.length - 1] === cur ? acc.slice(0, -1) : acc + cur;
  });
};

function problem2(cryptogram) {
  var answer = "";
  let code = cryptogram;
  while (answer !== decrypt(code)) {
    answer = decrypt(code);
    code = answer;
  }
  return answer;
}

module.exports = problem2;
