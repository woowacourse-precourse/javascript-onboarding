function problem2(cryptogram) {
  cryptogram = [...cryptogram];
  let isDone = false;
  time = 0;
  while (!isDone) {
    let newC = [];
    let temp = [];
    isDone = true;
    while (cryptogram.length != 0) {
      c = cryptogram.shift();
      time += 1;
      if (temp) {
        if (temp[temp.length - 1] == c) {
          temp.push(c);
          isDone = false;
        } else {
          if (temp.length == 1) newC.push(temp[0]);
          temp = [c];
        }
      } else {
        temp = [c];
      }
    }
    cryptogram = [...newC];
    if (temp.length === 1) cryptogram.push(temp[0]);
  }
  return cryptogram.join("");
}
module.exports = problem2;
