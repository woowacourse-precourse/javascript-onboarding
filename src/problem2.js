function problem2(cryptogram) {
  const deleteDuplication = (string) => {
    const stringToArr = string.split("");

    let i = 0;
    while (i < stringToArr.length) {
      if (stringToArr[i] === stringToArr[i + 1]) {
        stringToArr.splice(i, 2);
        i = 0;
      } else i++;
    }

    return stringToArr.join("");
  };

  return deleteDuplication(cryptogram);
}

module.exports = problem2;
