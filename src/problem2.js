function problem2(cryptogram) {
  let answer;

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  alphabet.map((el) => {
    let arrCrypto = cryptogram.split("");
    let idx = arrCrypto.indexOf(el);
    if (idx !== -1) {
      cryptogram = cryptogram.split(`${arrCrypto[idx]}${arrCrypto[idx]}`).join('');
    }
    console.log(cryptogram);
  })
  
  return answer;
}

module.exports = problem2;
