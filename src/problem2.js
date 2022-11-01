/**
 * 중복 문자들이 없는지 확인하는 함수
 * @param {*} cryptoArray
 * @returns boolean
 */
function isDuplicate(cryptoArray) {
  const crypto = [...cryptoArray];
  const sortedCrypto = crypto.sort();
  const sortedCryptoSetList = [...new Set(crypto)].sort();
  if (sortedCrypto.join() !== sortedCryptoSetList.join()) {
    return true;
  }
  return false;
}

function problem2(cryptogram) {
  let cryptoArray = [...cryptogram];

  while (true) {
    let last = cryptoArray[0];
    if (!isDuplicate(cryptoArray)) {
      return cryptoArray.join("");
    }
    const answer = [last];
    for (let i = 1; i < cryptoArray.length; i++) {
      if (last === cryptoArray[i]) {
        answer.pop();
        continue;
      }
      last = cryptoArray[i];
      answer.push(last);
    }
    cryptoArray = [...answer];
  }
}
module.exports = problem2;
