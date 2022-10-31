function isValid(cryptogram) {
  const regex = /^[a-z]+$/;

  let str = cryptogram;

  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    throw "1 이상 1000 이하인 글자수를 입력해주세요.";
  }
  if (!regex.test(str)) {
    throw "알파벳 소문자로 입력해주세요";
  }
}

function getDuplicateIndex(cryptogram) {
  let prevWord = "";
  const duplicatedIndexArr = [];
  cryptogram.forEach((_, index) => {
    if (prevWord === cryptogram[index]) {
      duplicatedIndexArr.push(index, index + 1);
    }
    prevWord = cryptogram[index];
  });
  return duplicatedIndexArr;
}

function deleteDuplicateWord(duplicatedIndexArr, cryptogramToArray) {
  duplicatedIndexArr.map((i) => {
    cryptogramToArray.splice(i - 1, 1, undefined);
  });
}

function deleteUndefinedWord(cryptogramToArray) {
  let tempCryptogram = [];
  tempCryptogram = cryptogramToArray.filter((word) => word !== undefined);
  return [...tempCryptogram];
}

function problem2(cryptogram) {
  isValid(cryptogram);

  let tempCryptogram = cryptogram;
  let cryptogramToArray = [...tempCryptogram];
  let n = cryptogram.length;

  for (let i = 0; i < n; i++) {
    const duplicatedIndexArr = getDuplicateIndex(cryptogramToArray);
    if (duplicatedIndexArr.length === 0) break;

    deleteDuplicateWord(duplicatedIndexArr, cryptogramToArray);
    cryptogramToArray = deleteUndefinedWord(cryptogramToArray);
  }

  const answer = cryptogramToArray.join("");
  return answer;
}

module.exports = problem2;
