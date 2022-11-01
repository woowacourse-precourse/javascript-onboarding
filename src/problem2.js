function problem2(cryptogram) {
  let result = [];
  result.push(cryptogram[0]);

  // 암호문의 길이만큼 for문을 돌면서 중복된 값을 제거
  for (let i = 1; i < cryptogram.length; i++) {
    let prev = result[result.length - 1];
    let cur = cryptogram[i];
    let next = cryptogram[i + 1];

    // 이전 값과 현재 값이 같으면 이전 값을 제거하고, 현재 값을 추가
    if (prev === cur) {
      result.pop();
      result.push(cur);

      // 추가한 현재 값과 다음 값이 다르면 현재 값을 제거 (연속한 중복값이 2개일 경우)
      if (prev !== next) {
        result.pop();
      }
    }
    // 이전 값과 현재 값이 다를 경우, 현재 값을 추가
    else {
      result.push(cur);
    }
  }

  return result.join("");
}

module.exports = problem2;
