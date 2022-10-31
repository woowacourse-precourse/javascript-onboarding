function problem2(cryptogram) {
  var answer;
  let result = "";

  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === result[result.length - 1]) {
      result = result.slice(0, -1);
      continue;
    }
    result += cryptogram[i];
  }
  answer = result;
  return answer;
}

problem2("browoanoommnaon");
module.exports = problem2;
