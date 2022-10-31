function sortStringArrayByDescendingOrder(stringArray) {
  return [...stringArray].sort((a, b) => b.length - a.length);
}

function getDuplicateCharactersList(cryptogram) {
  let previousCharacter = '';
  let duplicateCharacters = '';
  let duplicateCharactersList = [];

  for (let i = 0; i < cryptogram.length; i++) {
    const currentCharacter = cryptogram[i];

    if (previousCharacter === currentCharacter) {
      duplicateCharacters += currentCharacter;
      duplicateCharactersList.push(duplicateCharacters);
    } else {
      duplicateCharacters = currentCharacter;
    }
    previousCharacter = currentCharacter;
  }

  duplicateCharactersList = sortStringArrayByDescendingOrder(
    duplicateCharactersList
  );

  return duplicateCharactersList;
}

function isEmpty(array) {
  return !array.length;
}

function removeDuplicateCharacters(cryptogram, duplicateCharactersList) {
  duplicateCharactersList.forEach(
    (duplicateCharacters) =>
      (cryptogram = cryptogram.replace(duplicateCharacters, ''))
  );

  return cryptogram;
}

function decipherCryptogram(cryptogram) {
  while (cryptogram.length > 0) {
    const duplicateCharactersList = getDuplicateCharactersList(cryptogram);

    if (isEmpty(duplicateCharactersList)) {
      break;
    }

    cryptogram = removeDuplicateCharacters(cryptogram, duplicateCharactersList);
  }

  return cryptogram;
}

function problem2(cryptogram) {
  const decipheredCryptogram = decipherCryptogram(cryptogram);

  return decipheredCryptogram;
}

module.exports = problem2;
