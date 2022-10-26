const decrypt = (code) => {
  return code.split("").reduce((acc, cur) => {
    return acc[acc.length - 1] === cur ? acc : acc + cur;
  });
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
