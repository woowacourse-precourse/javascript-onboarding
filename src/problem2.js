const checkNextValue = (array, index) => {
  return index + 1 !== array.length && array[index] === array[index + 1];
};

function problem2(cryptogram) {
  const cryptogramArray = cryptogram.split("");
  let index = 0;
  while (index < cryptogramArray.length) {
    if (checkNextValue(cryptogramArray, index)) {
      cryptogramArray.splice(index, 2);
      index = 0;
    } else index += 1;
  }

  return cryptogramArray.join("");
}

module.exports = problem2;
