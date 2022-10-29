function problem2(cryptogram) {
  var answer;
  const text = [...cryptogram];
  function checkText(arr) {
    let i = 0;
    while (i < 500) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === arr[j + 1]) {
          arr.splice(j, 2);
          break;
        }
      }
      i++;
    }
    return text;
  }
  answer = checkText(text).join("");
  return answer;
}

module.exports = problem2;
