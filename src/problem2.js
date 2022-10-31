function problem2(cryptogram) {
  // cryptogram의 타입이 문자열이 아닌 경우 "Error: cryptogram의 타입이 문자열이 아닙니다."라는 문자열을 반환한다.
  if (typeof cryptogram !== "string") return "Error: cryptogram의 타입이 문자열이 아닙니다.";

  // cryptogram은 길이가 1 이하인 경우 "Error: cryptogram의 문자열의 길이가 1이상이어야 합니다."라는 문자열을 반환한다.
  if (cryptogram.length < 1) return "Error: cryptogram의 문자열의 길이가 1이상이어야 합니다.";

  // cryptogram은 길이가 1000 이상인 경우 "Error: cryptogram의 문자열의 길이가 1000이하이어야 합니다."라는 문자열을 반환한다.
  if (cryptogram.length > 1000) return "Error: cryptogram의 문자열의 길이가 1000이하이어야 합니다.";

  //
  const regex = /^[a-z]*$/;
  if (!regex.test(cryptogram)) return "Error: cryptogram는 알파벳 소문자 외에 다른 문자가 들어오면 안됩니다.";

  // 연속하는 중복 문자들을 삭제한 결과를 반환하는 로직을 만든다.
  // 반환한 결과의 문자가 연속하는 중복 문자가 없도록 반복한다.
  const splittedCryptogram = cryptogram.split("");

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

    // 더 이상 중복 문자가 없다면 문자열의 결과를 반환한다.
    if (decryptedArray.length === cryptogram.length) {
      return decryptedArray.join("");
    }

    return decrypt(decryptedArray);
  };

  return decrypt(splittedCryptogram);
}

module.exports = problem2;
