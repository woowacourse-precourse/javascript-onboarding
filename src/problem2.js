function problem2(cryptogram) {
  var answer;

  let continue_flag = true;
  let targetArr = cryptogram.toLowerCase().split("");

  while (continue_flag) {
    let result = [];
    let suspect;
    targetArr.push(-1);
    targetArr.forEach((element, index) => {
      if (element === -1) {
        return 0;
      }

      if (element === targetArr[index + 1]) {
        suspect = element;
      }
      if (element !== suspect) {
        result.push(element);
        suspect = "";
      }
    });
    targetArr.pop();
    console.log(`target ${targetArr}`);
    console.log(`result ${result}`);
    if (JSON.stringify(targetArr) === JSON.stringify(result)) {
      continue_flag = false;
    } else {
      targetArr = result;
    }
  }

  console.log(targetArr);
  answer = targetArr.join("");
  return answer;
}

module.exports = problem2;
