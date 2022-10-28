function checkCryptogramLength(cryptogram) {
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return false;
  }

  return true;
}

function checkCryptogramOnlyLowerCase(cryptogram) {
  const regex = /^[a-z]+$/g;

  if (!regex.test(cryptogram)) {
    return false;
  }

  return true;
}

function runDecoding(cryptogram) {
  let startIndex = 1000;
  let endIndex = 1000;

  while (true) {
    let wantDeleteArr = [];

    // 문자열을 순회하면서 반복되는 부분의 데이터를 배열화하여 저장한다.
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] !== cryptogram[i + 1]) {
        if (startIndex !== 1000) {
          endIndex = i;

          wantDeleteArr.push([cryptogram[i], startIndex, endIndex]);

          startIndex = 1000;
          endIndex = 1000;

          continue;
        }

        continue;
      }

      if (startIndex === 1000) {
        startIndex = i;
      }
    }

    // for문이 한번 끝나면 전체 문자열에 대한 순회가 한 번 끝난 것이다.
    for (let i = 0; i < wantDeleteArr.length; i++) {
      const str = wantDeleteArr[i][0];

      const start = wantDeleteArr[i][1];

      const end = wantDeleteArr[i][2];

      const deleteStr = str.repeat(end - start + 1);

      let deletedStr = cryptogram.split(deleteStr);

      cryptogram = deletedStr.join("");
    }

    if (wantDeleteArr.length === 0) {
      break;
    }
  }

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
