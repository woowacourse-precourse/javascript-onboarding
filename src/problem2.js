const FIRST_INDEX = 0;

function problem2(cryptogram) {
  let beforeDeduplicationLength = 0;
  let afterDeduplicationLength = 0;
  let deduplicatedCryptogram = cryptogram;
  let referenceCharacter = deduplicatedCryptogram[FIRST_INDEX];
  let dededuplicatedArr = [];

  do {
    beforeDeduplicationLength = deduplicatedCryptogram.length;
    dededuplicatedArr.push(referenceCharacter);

    for (let i = FIRST_INDEX + 1; i < beforeDeduplicationLength; i++) {
      const targetCharacter = deduplicatedCryptogram[i];

      if (referenceCharacter !== targetCharacter) {
        dededuplicatedArr.push(targetCharacter);
        referenceCharacter = targetCharacter;
      } else if (
        referenceCharacter === dededuplicatedArr[dededuplicatedArr.length - 1]
      ) {
        dededuplicatedArr.pop();
      }
    }

    deduplicatedCryptogram = dededuplicatedArr.join("");
    afterDeduplicationLength = deduplicatedCryptogram.length;
    referenceCharacter = deduplicatedCryptogram[FIRST_INDEX];
    dededuplicatedArr = [];
  } while (beforeDeduplicationLength !== afterDeduplicationLength);

  return deduplicatedCryptogram;
}

module.exports = problem2;
