function problem2(cryptogram) {
  let arr = [...cryptogram];

  while (true) {
    let temp = arr.length;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
      }
    }
    if (temp === arr.length) break;
  }
  return arr.join('');
}

module.exports = problem2;
