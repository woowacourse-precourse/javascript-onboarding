function problem2(cryptogram) {
  var answer;
  const arr = cryptogram.split("");

  //
  let check = true;
  while (check) {
    check = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        check = true;
      }
    }
  }
  return answer;
}

module.exports = problem2;
