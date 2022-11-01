function problem2(cryptogram) {
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return "암호문은 1자 이상 1,000자 이하의 문자열이여야 합니다.";
  }
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

    if (JSON.stringify(targetArr) === JSON.stringify(result)) {
      continue_flag = false;
    } else {
      targetArr = result;
    }
  }

  answer = targetArr.join("");
  return answer;
}

module.exports = problem2;
