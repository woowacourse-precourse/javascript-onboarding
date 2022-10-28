function problem2(cryptogram) {
  let arr = cryptogram.split("");
  let checkedArr = checkOverlap(arr);
  let result = joinArr(checkedArr);
  return result;
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

function joinArr(arr) {
  return arr.join("");
}

module.exports = problem2;
