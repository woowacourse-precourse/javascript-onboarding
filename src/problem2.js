function problem2(cryptogram) {
  let cryptogramArr = cryptogram.split('');
  let sameStringIndex = 0;
  let consecutiveStrings = false;

  // 4. 연속으로 같은 문자가 없을 때까지 반복하는 기능
  while (true) {
    // 1. 연속된 중복 문자의 시작 index와 끝 index를 구하는 기능
    for (let i = 0; i < cryptogramArr.length; i++) {
      if (cryptogramArr[i] === cryptogramArr[i + 1]) {
        sameStringIndex = i + 1;
        while (true) {
          if (cryptogramArr[i] === cryptogramArr[sameStringIndex]) break;
          sameStringIndex++;
        }
        // 2. 연속된 중복 문자의 시작 index와 끝 index에 해당하는 문자를 없애는 기능
        for (let j = i; j <= sameStringIndex; j++) {
          cryptogramArr[j] = '';
        }
        // 3. 2번에서 없앤 문자를 제외한 새로운 배열에서 다시 연속된 중복 문자를 찾는 기능
        cryptogramArr = cryptogramArr.join('').split('');
        // 4-1. 연속된 문자가 있는 경우는 true로 변경해준다.
        consecutiveStrings = true;
        break;
      }
    }
    // 4-2. 모든 배열을 돌았는데도 연속된 문자가 없는 경우 (그대로 false이면)
    // 더 이상 연속된 문자가 없는 것이므로 반복문을 탈출해준다.
    if (consecutiveStrings === false) break;
    consecutiveStrings = false;
  }
  return cryptogramArr.join('');
}

module.exports = problem2;