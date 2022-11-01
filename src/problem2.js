function problem2(cryptogram) {
  var answer;
  let arr = [...cryptogram];
  const len = arr.length

  for (let h = 0; h < len; h++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        break;
      }
    }
  }

  answer = arr.join('');

  return answer;
}

module.exports = problem2;
