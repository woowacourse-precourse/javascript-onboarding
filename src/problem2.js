function problem2(cryptogram) {
  cryptogram = cryptogram.split("");
  for (let i = 0; i <= cryptogram.length - 1; i++) {
    if (cryptogram[i] == cryptogram[i + 1]) {
      cryptogram.splice(i, 1);
      cryptogram.splice(i, 1);
      i = -1;
    }
  }
  let result = cryptogram.join("");
  return result;
}
console.log(problem2("zyelleyz"));
module.exports = problem2;
