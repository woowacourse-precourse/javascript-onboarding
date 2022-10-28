function problem2(cryptogram) {
  var answer;

  let decode = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (decode[decode.length - 1] !== cryptogram[i]) {
      decode.push(cryptogram[i]);
    } else {
      if (cryptogram[i + 1] !== decode[decode.length - 1]) {
        decode.pop();
      }
    }
  }
  answer = decode.join("");

  return answer;
}

module.exports = problem2;
