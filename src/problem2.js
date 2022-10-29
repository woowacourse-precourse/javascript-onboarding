function findOverlapStringIndex(str, base) {
  let offset = base + 1;
  if (offset > str.length) return base;
  if (str[base] !== str[offset]) return base;
  return findOverlapStringIndex(str, offset);
}
function problem2(cryptogram) {
  var answer;
  let base = 0; // 중복검사 때 사용하는 base index
  let target = cryptogram;

  while (base < target.length - 1) {
    // 중복 검사로직 작성
    let offset = findOverlapStringIndex(target, base);
    if (offset === base) {
      base++;
      continue;
    }
    // 새 문자열 로직 작성
  }
  return answer;
}

module.exports = problem2;
