function findDuplicated(splited) {
  const duplicated = [];

  let pre = splited[0];

  // 반복문을 돌면서 중복되는 글자가 있는 인덱스 찾기
  for (let i = 1; i < splited.length; i++) {
    if (splited[i] === pre) {
      if (!duplicated[i - 1]) {
        duplicated[i] = 1;
        duplicated[i - 1] = 1;
        continue;
      }
      duplicated[i] = 1;
    }

    pre = splited[i];
  }

  return duplicated;
}

function problem2(cryptogram) {
  if (cryptogram.length > 1000 || cryptogram.length < 1) return;
  if (cryptogram.match(/([^A-Za-z])+/g)) return;

  let string = cryptogram.toLowerCase();
  let splited = string.split("");

  while (true) {
    // 연속으로 중복되는 글자 찾기
    const duplicated = findDuplicated(splited);

    // 중복되는 게 없다면 종료
    if (!duplicated.length) break;

    // findDuplicated 결과를 토대로 중복되는 글자 삭제
    for (let i = 0; i < duplicated.length; i++) {
      if (duplicated[i]) {
        splited.splice(i, 1, null);
      }
    }
    string = splited.join("");
    splited = string.split("");
  }

  return string;
}

module.exports = problem2;
