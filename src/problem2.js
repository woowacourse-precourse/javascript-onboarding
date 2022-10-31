function problem2(cryptogram) {
  return deleteDuplications(cryptogram);
}

const deleteDuplications = (string) => {
  const chars = string.split("");

  let i = 0;
  while (i < chars.length) {
    if (chars[i] === chars[i + 1]) {
      chars.splice(i, 2);
      i = 0;
    } else i++;
  }

  return chars.join("");
};

module.exports = problem2;
