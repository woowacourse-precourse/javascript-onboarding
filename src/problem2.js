function problem2(cryptogram) {
  let arr = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; ++i) {
    const searchStr = cryptogram[i];
    if (arr[arr.length - 1] === searchStr) {
      arr.pop();
      continue;
    }
    arr.push(searchStr);
  }

  return arr.join('');
}

module.exports = problem2;
