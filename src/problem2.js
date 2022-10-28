function problem2(cryptogram) {
  let arr = cryptogram.split("");
  let checkedArr = checkOverlap(arr);
  return;
}

function checkOverlap(arr) {
  let i = 0;
  while (i !== arr.length) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return arr;
}

module.exports = problem2;
