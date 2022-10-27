function problem2(cryptogram) {
  let strArr = cryptogram.split("");
  return removeStr(strArr);
}
function removeStr(strArr) {
  let removedString = "";
  strArr.forEach((x) => {
    if (removedString[removedString.length - 1] !== x) removedString += x;
    else removedString = removedString.slice(0, removedString.length - 1);
  });
  return removedString;
}
module.exports = problem2;
