function problem2(cryptogram) {
  let cryptogramArr = cryptogram.split('');
  let sameStringIndex = 0;
  let consecutiveStrings = false;

  // 5. 연속으로 같은 문자가 없을 때까지 반복하는 기능
  while (true) {
    // 1. 연속된 중복 문자의 시작 index와 끝 index를 구하는 기능
    for (let i = 0; i < cryptogramArr.length; i++) {
      if (cryptogramArr[i] === cryptogramArr[i + 1]) {
        sameStringIndex = i;
        while (cryptogramArr[i] === cryptogramArr[sameStringIndex]) {
          sameStringIndex++;
        }
        sameStringIndex -= 1;
        // 2. 연속된 중복 문자의 시작 index와 끝 index에 해당하는 문자를 없애는 기능
        for (let j = i; j <= sameStringIndex; j++) {
          cryptogramArr[j] = '';
        }
        // 3. 배열을 끝까지 돌면서 중복을 전부 ''로 바꿔준다.
        i = sameStringIndex;
        // 5-1. 연속된 문자가 있는 경우는 true로 변경해준다.
        consecutiveStrings = true;
      }
    }
    // 4. 배열 끝까지 다 돈 후에 합쳐 문자열을 만들고 배열로 다시 만든다.
    cryptogramArr = cryptogramArr.join('').split('');
    // 5-2. 모든 배열을 돌았는데도 연속된 문자가 없는 경우 (그대로 false이면)
    // 더 이상 연속된 문자가 없는 것이므로 반복문을 탈출해준다.
    if (consecutiveStrings === false) break;
    consecutiveStrings = false;
  }
  return cryptogramArr.join('');
}

module.exports = problem2;