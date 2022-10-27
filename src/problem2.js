function problem2(cryptogram) {
  var answer;
  return answer;
}

function remove_duplication(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      return arr;
    }
  }
}

module.exports = problem2;
