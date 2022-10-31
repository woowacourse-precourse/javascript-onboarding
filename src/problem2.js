const FIRST_INDEX = 0;

function problem2(cryptogram) {
  let referenceCharacter = cryptogram[FIRST_INDEX];
  let dededuplicatedArr = [referenceCharacter];

  for (let i = 1; i < cryptogram.length; i++) {
    const targetCharacter = cryptogram[i];

    if (referenceCharacter !== targetCharacter) {
      dededuplicatedArr.push(targetCharacter);
      referenceCharacter = targetCharacter;
    } else if (
      referenceCharacter === dededuplicatedArr[dededuplicatedArr.length - 1]
    ) {
      dededuplicatedArr.pop();
    }
  }

  return dededuplicatedArr.join("");
}

module.exports = problem2;
