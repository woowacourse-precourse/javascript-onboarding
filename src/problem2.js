function problem2(cryptogram) {
  // 연속하는 중복 문자들을 삭제한 결과를 반환하는 로직을 만든다.
  // 반환한 결과의 문자가 연속하는 중복 문자가 없도록 반복한다.
  const cryptogramArray = cryptogram.split("");

  const decrypt = (cryptogram) => {
    if (typeof cryptogram === "string") return cryptogram;

    let prevChr = cryptogram[0];

    for (let i = 1; i < cryptogram.length; i++) {
      if (prevChr === cryptogram[i]) {
        delete cryptogram[i - 1];
        delete cryptogram[i];
      } else {
        prevChr = cryptogram[i];
      }
    }

    const decryptedArray = cryptogram.filter((chr) => chr !== undefined);

    // 더 이상 중복 문자가 없다면 결과를 반환한다.
    if (decryptedArray.length === cryptogram.length) {
      return decryptedArray.join("");
    }

    return decrypt(decryptedArray);
  };

  return decrypt(cryptogramArray);
}

module.exports = problem2;
