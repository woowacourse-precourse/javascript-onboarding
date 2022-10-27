function problem2(cryptogram) {
  const strArr = [...cryptogram];
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1]) {
      newArr.push(strArr[i]);
    } else i++;
  }
  const joinStr = newArr.join("");
  if (joinStr === cryptogram) {
    return joinStr;
  } else {
    return problem2(joinStr);
  }
}

module.exports = problem2;
