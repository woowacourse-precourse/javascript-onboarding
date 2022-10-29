function problem2(cryptogram) {
  let pattern = /(\w)\1+/g;
  let repeated = cryptogram.match(pattern);
  let deleted = cryptogram;

  if (repeated===null){return cryptogram}
  else {
    deleted = deleted.replace(repeated[0],'')
    repeated = deleted.match(pattern)
  }
}

module.exports = problem2;
