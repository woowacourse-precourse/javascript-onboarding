function problem2(cryptogram) {
  let arr = [...cryptogram];
  let i = 0;
  while (i != arr.length) {
      arr[i] == arr[i+1] ? (
          arr.splice(i, 2),
          i = 0
      ) : i += 1
  }
  return arr.join('')
}

module.exports = problem2;
