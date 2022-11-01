function problem2(cryptogram) {
  let beforeDeduplication = "";
  let afterDeduplication = cryptogram;
  let referenceCharacter = "";
  let dededuplicatedArr = [];

  do {
    beforeDeduplication = afterDeduplication;
    referenceCharacter = beforeDeduplication[0];
    dededuplicatedArr = [referenceCharacter];

    for (let i = 1; i < beforeDeduplication.length; i++) {
      const targetCharacter = beforeDeduplication[i];

      if (referenceCharacter !== targetCharacter) {
        dededuplicatedArr.push(targetCharacter);
        referenceCharacter = targetCharacter;
      } else if (
        referenceCharacter === dededuplicatedArr[dededuplicatedArr.length - 1]
      ) {
        dededuplicatedArr.pop();
      }
    }

    afterDeduplication = dededuplicatedArr.join("");
  } while (beforeDeduplication !== afterDeduplication);

  return afterDeduplication;
}

module.exports = problem2;
