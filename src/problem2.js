function eliminateDuplication(str) {
  const regex = /([a-z])\1+/g;

  return str.replace(regex, "");
}

function problem2(cryptogram) {
  let eliminated = eliminateDuplication(cryptogram);

  while (eliminated !== cryptogram) {
    cryptogram = eliminated;
    eliminated = eliminateDuplication(cryptogram);
  }

  return eliminated;
}

module.exports = problem2;
