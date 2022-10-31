function problem2(cryptogram) {
  let letters = cryptogram.split("");
  let loopFlag;
  let i = 0;

  do {
    loopFlag = 0;

    const target = [];
    tail = letters.length - 1;

    for (i = 0; i < tail; i++) {
      if (letters[i] == letters[i + 1]) {
        target.push(i);
        target.push(i + 1);
        loopFlag += 1;
      }
    }

    const dict = letters.filter((letter, index) => {
      return !target.includes(index);
    });

    letters = [...dict];
  } while (loopFlag > 0);

  const answer = letters.join("");
  return answer;
}

module.exports = problem2;
