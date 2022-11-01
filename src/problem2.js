/*
 * <기능 목록>
 * 1. 중복 문자열을 제거하는 removeDupLetters() 함수.
 *     문자열을 입력받고, 문자를 차례로 하나씩 확인한다:
 *     (1) 현재 문자(letter)가 이전 문자(prevLetter)와 같다면 중복 카운트 변수(dupCount)를 증가시킨다.
 *     (2) 현재 문자(letter)가 이전 문자(prevLetter)와 다르고, dupCount가 0이라면 이전 문자(prevLetter)를 새로운 문자열에 추가한다.
 *     (3) 현재 문자(letter)가 이전 문자(prevLetter)와 다르고, dupCount가 0이 아니라면 이전 문자(prevLetter)은 제거되어야 하는 중복 문자열이므로 새로운 문자열에 추가하지 않는다.
 *     중복 문자열을 제거한 새로운 문자열을 반환한다.
 * 2. 중복 문자열을 반복하여 모두 제거한, 해독된 암호를 반환하는 decodeCryptogram() 함수.
 */

function problem2(cryptogram) {
  if (!isValidInput(cryptogram)) {
    console.log("Error: Invalid Input");
    return -1;
  }
  const decodedLetters = decodeCryptogram(cryptogram);

  return decodedLetters;
}

function isValidInput(cryptogram) {
  let isValid;
  if (!(cryptogram.length >= 1 && cryptogram.length <= 1000)) {
    isValid = false;
  } else if (!(cryptogram === cryptogram.toLowerCase())) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function removeDupLetters(letters) {
  let newLetters = "";
  let prevLetter = "";
  let duplicatedCount = 0;

  for (let letter of letters) {
    if (letter === prevLetter) {
      duplicatedCount++;
    } else if (duplicatedCount === 0) {
      newLetters += prevLetter;
      prevLetter = letter;
    } else {
      prevLetter = letter;
      duplicatedCount = 0;
    }
  }
  if (duplicatedCount === 0) {
    newLetters += prevLetter;
  }

  return newLetters;
}

function decodeCryptogram(cryptogram) {
  let prevLetters = cryptogram;
  let newLetters = "";

  while (1) {
    newLetters = removeDupLetters(prevLetters);
    if (newLetters === prevLetters) {
      break;
    } else {
      prevLetters = newLetters;
    }
  }
  const decodedLetters = newLetters;

  return decodedLetters;
}

module.exports = problem2;
