// 01:21 ~
function problem2(cryptogram) {
  let currentCryptogram = cryptogram;
}

function deleteRepeatedChars(cryptogram) {
  return cryptogram
    .split("")
    .filter(
      (ele, idx) => ele !== cryptogram[idx + 1] && ele !== cryptogram[idx - 1]
    )
    .join("");
}

deleteRepeatedChars("browoanoommnaon");
module.exports = problem2;
