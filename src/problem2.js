function problem2(cryptogram) {
  var answer;
  let i = 0;
  let tmpary = cryptogram.split("");
  let checking = true;

  while (checking) {
    let count = 0,
      indexCount = 0;
    for (chr of tmpary) {
      if (chr == tmpary[indexCount + 1]) {
        tmpary.splice(indexCount, 2);
        count++;
        break;
      }
      indexCount++;
    }
    if (count == 0) checking = false;
  }

  console.log(tmpary);

  return tmpary.join("");
}

module.exports = problem2;
