function problem2(cryptogram) {
  // 예외사항 1. 길이가 1보다 작거나 1000보다 클 수 없다.
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return -1;
  }
  // 예외사항 2. 알파벳 소문자 이외에는 올 수 없다. (정규표현식 사용)
  if (/[^a-z]/.test(cryptogram)) {
    return -1;
  }

  do {
    // 중복되는 index 값을 얻는다.
    let arr = cryptogram.split("");
    const duplicatedindex = getDuplictatedindex(arr);
    console.log(arr.length);
    console.log(duplicatedindex);

    let count = getCount(arr, duplicatedindex);
    console.log(count);
    console.log(arr);
    arr.join("");
  } while (duplicatedindex !== -1);

  return arr;
}

// 중복된 문자가 있는 index 값을 얻는 함수
function getDuplictatedindex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return i;
    }
    if (i === arr.length - 1) {
      return -1;
    }
  }
}

// 중복된 문자로부터 몇 개까지 중복인지 count 값을 얻는 함수
function getCount(cryptogram, duplicatedindex) {
  let count = 1;
  for (let i = duplicatedindex; i < cryptogram.length; i++) {
    if (cryptogram[i + 1] === cryptogram[i + 2]) {
      count++;
      continue;
    }
    if (cryptogram[i + 1] !== cryptogram[i + 2]) {
      break;
    }
  }
  return count;
}

module.exports = problem2;

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// b r o w o a n o o m  m  n  a  o  n
