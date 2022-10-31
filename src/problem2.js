const getOnceSolvedString = (cryptogram) => {
  let solvedString = '';
  for (let i = 0; i < cryptogram.length; i++) {
    const curIdx = i;
    while (cryptogram[i] === cryptogram[i + 1]) {
      i++;
    }
    if (curIdx === i) {
      solvedString += cryptogram[curIdx];
    }
  }

  return solvedString;
};

function problem2(cryptogram) {
  while (true) {
    const solvedString = getOnceSolvedString(cryptogram);
    if (solvedString === cryptogram) {
      break;
    }
    cryptogram = solvedString;
  }

  return cryptogram;
}

module.exports = problem2;
