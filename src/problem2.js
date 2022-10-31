function problem2(cryptogram) {
  var answer;
  const cryptogramChars = cryptogram.split("");
  const results = deleteNearSameChar(cryptogramChars);
  answer = results.join("");
  return answer;
}

function deleteNearSameChar(cryptogramChars) {
  for (let i = 0; i < cryptogramChars.length; i++) {
    if (cryptogramChars[i] === cryptogramChars[i + 1]) {
      cryptogramChars.splice(i, 2);
      deleteNearSameChar(cryptogramChars);
      break;
    }
  }
  return cryptogramChars;
}

module.exports = problem2;
