function problem2(cryptogram) {
  let splited_arr = cryptogram.split("");
  let i = 0;
  while (i != splited_arr.length) {
    splited_arr[i] === splited_arr[i + 1]
      ? (splited_arr.splice(i, 2), (i = 0))
      : (i += 1);
  }
  return splited_arr.join("");
}
module.exports = problem2;
