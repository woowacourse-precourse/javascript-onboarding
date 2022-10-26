function problem2(cryptogram) {
  const decrypt = (cryptogram) => {
    if (cryptogram.length === 0) {
      return cryptogram;
    }

    const 

    const decrypted = [...cryptogram].reduce((acc, cur) => {
      if (acc.slice(-1) === cur) {
        return acc.slice(0, -1);
      }
      return acc + cur;
    });

    if (cryptogram === decrypted) {
      return cryptogram;
    }
//?
  };

  decrypt(cryptogram); //?
}
problem2('browoanoommnaon'); //?
// module.exports = problem2;
