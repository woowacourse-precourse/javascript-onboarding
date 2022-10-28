function problem2(cryptogram) {
  let arr = [];

  for (let i = 0; i < cryptogram.length; ++i) {
    arr.push(cryptogram[i]);
    if (arr.length > 2) {
      let num = arr.length;
      if (arr[num - 1] === arr[num - 2]) {
        arr.pop();
        arr.pop();
      }
    }
  }

  return arr.join('');
}

module.exports = problem2;
