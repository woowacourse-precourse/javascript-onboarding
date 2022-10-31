function problem2(cryptogram) {
  let strArr = [...cryptogram];
  let removedStr = "";

  strArr.forEach((str) => {
    if (removedStr[removedStr.length - 1] === str)
      removedStr = removedStr.slice(0, removedStr.length - 1);
    else removedStr += str;
  });
  return removedStr;
}
module.exports = problem2;
