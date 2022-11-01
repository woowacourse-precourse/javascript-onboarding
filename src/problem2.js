function problem2(cryptogram) {
  var answer;
  let temp = [];
  let arr_crypto = [...cryptogram];
  for (var i = 0; ; i++) {
    let count = 0;
    let overall_count = 0;
    for (var j = 0; j < arr_crypto.length; j++) {
      temp.push(arr_crypto[j]);
      if (arr_crypto[j] == arr_crypto[j + 1]) {
        temp.pop();
        count++;
        overall_count++;
      }
      if (count != 0 && arr_crypto[j] != arr_crypto[j + 1]) {
        temp.pop();
        count = 0;
        overall_count++;
      }
      if (j == arr_crypto.length - 1) {
        temp.push(arr_crypto[j + 1]);
        if (arr_crypto[j] == arr_crypto[j + 1]) {
          temp.pop();
        }
        count = 0;
        break;
      }
    }
    arr_crypto = [];
    for (var z = 0; z < temp.length; z++) {
      arr_crypto.push(temp[z]);
    }
    temp = [];
    if (overall_count == 0) {
      break;
    }
  }
  answer = arr_crypto.join('');
  return answer;
}

module.exports = problem2;
