function problem2(cryptogram) {
  let pattern = /(\w)\1+/g;
  let decode = cryptogram;
  while (pattern.test(decode)) {
    decode = decode.replace(pattern, '');
    console.log(decode);
  }
  return decode ? decode : '';
}
module.exports = problem2;
