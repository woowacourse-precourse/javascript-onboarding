function problem2(cryptogram) {
  var answer;

  // String -> Array
  const arr = [...cryptogram];

  let idx = 1;
  while (idx != arr.length) {
    if (arr[idx - 1] == arr[idx]) {
      arr.splice(idx - 1, 2);
      idx -= 2;
    }
    idx++;
  };

  // Array -> String
  answer = arr.join('');

  return answer;
}

module.exports = problem2;