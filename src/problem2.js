function problem2(cryptogram) {
  let chars = [...cryptogram];
  let index = 0;

  while (index !== chars.length) {
    if (chars[index] === chars[index+1]) {
      chars.splice(index, 2);
      index = 0;
    } else {
      index += 1;
    }
  }
  return chars.join('');
}

module.exports = problem2;
