function problem2(cryptogram) {
  var answer = "";
  var arr1 = [...cryptogram];

  while (1) {
    var arr2 = [arr1[0]];
    var isContinue = false;
    for (var i = 1; i < arr1.length; i++) {
      var temp = arr2[arr2.length - 1];
      if (temp !== arr1[i]) {
        if (isContinue) arr2.splice(arr2.length - 1, 1);
        arr2.push(arr1[i]);
        isContinue = false;
      } else isContinue = true;
    }
    if (isContinue) arr2.splice(arr2.length - 1, 1);
    if (arr2.length === arr1.length || arr2.length === 0) {
      answer = arr2.join("");
      break;
    }
    arr1.length = 0; // arr1 배열 비우기
    arr1 = arr1.concat(arr1, arr2);
  }
  return answer;
}

module.exports = problem2;
