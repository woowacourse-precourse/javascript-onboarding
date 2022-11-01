function findFinish(cryptogram, c, i) {
  while (cryptogram[i] == c) {
    i++;
  }
  return i;
}

function check(cryptogram, i) {
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] == cryptogram[i + 1]) {
      return i;
    }
  }
  return -1;
}
function findStart(cryptogram) {
  while (true) {
    const startIndex = check(cryptogram);
    if (startIndex == -1) {
      break;
    }
    const finishIndex = findFinish(
      cryptogram,
      cryptogram[startIndex],
      startIndex
    );
    cryptogram.splice(startIndex, finishIndex - startIndex);
  }
  return cryptogram;
}

function problem2(cryptogram) {
  const cryptogram_arr = [...cryptogram];
  const res = findStart(cryptogram_arr);
  resJoin = res.join("");
  return resJoin;
}

module.exports = problem2;
