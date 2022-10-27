const removeDuplicate = (cryptogram) => {
  let strArr = [...cryptogram];
  let blank = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (strArr[i] != strArr[i + 1]) {
      if (strArr[i] != strArr[i - 1])
        if (strArr[i] == blank[blank.length - 1]) blank = blank.slice(0, -1);
        else {
          blank.push(strArr[i]);
        }
    } else i = i + 1;
  }
  return blank.join("");
};

function problem2(cryptogram) {
  var answer;

  answer = removeDuplicate(cryptogram);

  return answer;
}

module.exports = problem2;
