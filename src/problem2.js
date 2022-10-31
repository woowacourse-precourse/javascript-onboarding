function problem2(cryptogram) {
  let cryptogramArr = [...cryptogram];
  let str;

  for(let i=0; i<cryptogramArr.length; i++) {
    if (str === cryptogramArr[i]) {
      cryptogramArr.splice(i - 1, 2);
      i = 0;
      str = "";
    }
    str = cryptogramArr[i];
  }

  return cryptogramArr.join("");
}

module.exports = problem2;