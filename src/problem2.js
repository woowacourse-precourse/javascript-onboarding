function problem2(cryptogram) {
  var answer;
  const cryptogramArr = cryptogram.split("");
  const onlyCrytogramArr = deleteNearSameChar(cryptogramArr);
  answer = onlyCrytogramArr.join("");
  return answer;
}

function deleteNearSameChar(cryptogramArr) {
  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] === cryptogramArr[i + 1]) {
      cryptogramArr.splice(i, 2);
      deleteNearSameChar(cryptogramArr);
      break;
    }
  }
  return cryptogramArr;
}

module.exports = problem2;
