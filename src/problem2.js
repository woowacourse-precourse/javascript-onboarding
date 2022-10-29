function findOverlapStringIndex(str, base) {
  let offset = base + 1;
  if (offset > str.length) return base;
  if (str[base] !== str[offset]) return base;
  return findOverlapStringIndex(str, offset);
}

function makeNewString(str, rmBase, rmOffset) {
  const leftStr = str.substr(0, rmBase);
  const rightStr = str.substr(rmOffset + 1, str.length - 1);
  return leftStr + rightStr;
}

function isEncryptFinish(base, length) {
  return base < length - 1;
}

function problem2(cryptogram) {
  var answer;
  let base = 0; // 중복검사 때 사용하는 base index
  let target = cryptogram;

  while (isEncryptFinish(base, target.length)) {
    // 중복 검사로직 작성
    let offset = findOverlapStringIndex(target, base);
    if (offset === base) {
      base++;
      continue;
    }
    // 새 문자열 로직 작성
    target = makeNewString(target, base, offset);
    base = 0;
  }

  return answer;
}

module.exports = problem2;
