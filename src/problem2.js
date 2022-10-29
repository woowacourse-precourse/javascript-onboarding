function checkCryptogramLength(cryptogram) {
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return false;
  }

  return true;
}

function checkCryptogramOnlyLowerCase(cryptogram) {
  const regex = /^[a-z]+$/;

  if (!regex.test(cryptogram)) {
    return false;
  }

  return true;
}

function makeWantDeleteArray(cryptogram, startIndex, endIndex, wantDeleteArr) {
  // 문자열을 순회하면서 반복되는 부분의 데이터를 배열화하여 저장한다.
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] !== cryptogram[i + 1]) {
      if (startIndex !== null) {
        endIndex = i;

        wantDeleteArr.push([cryptogram[i], startIndex, endIndex]);

        startIndex = null;
        endIndex = null;

        continue;
      }

      continue;
    }

    if (startIndex === null) {
      startIndex = i;
    }
  }
}

function deleteRepeatedString(cryptogram, wantDeleteArr) {
  // for문이 한번 끝나면 전체 문자열에 대한 순회가 한 번 끝난 것이다.
  for (let i = 0; i < wantDeleteArr.length; i++) {
    const str = wantDeleteArr[i][0];

    const start = wantDeleteArr[i][1];

    const end = wantDeleteArr[i][2];

    const wantDeleteStr = str.repeat(end - start + 1);

    let deletedStr = cryptogram.split(wantDeleteStr);

    cryptogram = deletedStr.join("");
  }

  return cryptogram;
}

function roundsAllString(cryptogram, startIndex, endIndex) {
  while (true) {
    let wantDeleteArr = [];

    makeWantDeleteArray(cryptogram, startIndex, endIndex, wantDeleteArr);

    if (wantDeleteArr.length === 0) {
      break;
    }

    cryptogram = deleteRepeatedString(cryptogram, wantDeleteArr);
  }

  return cryptogram;
}

function runDecoding(cryptogram) {
  let startIndex = null;
  let endIndex = null;

  cryptogram = roundsAllString(cryptogram, startIndex, endIndex);

  return cryptogram;
}

function problem2(cryptogram) {
  if (
    !checkCryptogramLength(cryptogram) ||
    !checkCryptogramOnlyLowerCase(cryptogram)
  ) {
    return;
  }

  return runDecoding(cryptogram);
}

module.exports = problem2;
