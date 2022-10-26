function checkDuplication(cryptogram) {
  const check = [...cryptogram] //
    .some((x, i, cryptogram) => x === cryptogram[i + 1]);
  return check;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}
module.exports = problem2;
