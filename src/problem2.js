function isNotDuplicated(arr, idx, word) {
  return arr[arr.length - 1] !== word[idx];
}

function problem2(cryptogram) {
  let temp = [];

  for (let i = 0; i < cryptogram.length; i++) {
    if (isNotDuplicated(temp, i, cryptogram)) temp.push(cryptogram[i]);
    else {
      if (temp[temp.length - 1] === cryptogram[i + 1]) i += 1;
      if (cryptogram[i] === cryptogram[i + 1]) i += 1;
      if (i === 2 && temp.length === 2) {
        temp.pop();
        break;
      }
      temp.pop();
    }
  }

  return temp.join("");
}

module.exports = problem2;
