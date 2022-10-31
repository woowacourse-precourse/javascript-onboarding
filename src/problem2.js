function problem2(cryptogram) {
  const cryptogramArr = [...cryptogram];
  const newArr = [];
  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] !== cryptogramArr[i + 1]) {
      newArr.push(cryptogramArr[i]);
    } else {
      i++;
    }
  }
  const decipherArr = newArr.join("");

  if (decipherArr === cryptogram) {
    return decipherArr;
  } else {
    return problem2(decipherArr);
  }
}
module.exports = problem2;
