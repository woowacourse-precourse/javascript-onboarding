function problem2(cryptogram) {
  let rep = /(\w)\1+/g;
  if (rep.test(cryptogram)) {
    const result = cryptogram.replace(rep, '');
    return problem2(result);
  } else {
    return cryptogram;
  }
}

module.exports = problem2;
