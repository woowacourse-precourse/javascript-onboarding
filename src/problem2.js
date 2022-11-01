function problem2(cryptogram) {
  cryptogram = cryptogram.split('').filter(x => x.toLowerCase()).join('')

  let prev = cryptogram;
  while (1) {
    let removes = [];
    for (let i = 0; i < [...cryptogram].length; i++) {
      if ([...cryptogram][i] === [...cryptogram][i + 1]) {
        removes.push(i, i + 1);
      }
    }
    [...new Set(removes)].forEach((remove) => {
      cryptogram =
        cryptogram.slice(0, remove) + "-" + cryptogram.slice(remove + 1);
    });
    cryptogram = cryptogram
      .split("")
      .filter((x) => x !== "-")
      .join("");
    if (prev === cryptogram) break;
    prev = cryptogram;
  }
  return cryptogram;
}

console.log(problem2("aazzqweqweaaq"));

module.exports = problem2;
