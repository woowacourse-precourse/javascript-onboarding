function problem2(cryptogram) {
  let letters = [...cryptogram];
  let index = 0;

  while (index !== letters.length) {
    if (letters[index] === letters[index + 1]) {
      letters.splice(index, 2);
      index = 0;
    } else {
      index += 1;
    }
  }

  return letters.join("");
}

module.exports = problem2;
