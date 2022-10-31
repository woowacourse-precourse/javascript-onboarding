function problem2(cryptogram) {
  let idx = [];
  let strCrypto;
  // 배열로 만듦
  let arrCrypto = cryptogram.split("");
  // 임시 변수에 첫번째 글자를 담아 둠
  let temp = cryptogram[0];
  for (let i = 1; i < arrCrypto.length; i++) {
    // 글자를 하나씩 증가시키면서 임시 변수와 같은지를 비교해서 만약 같다면 idx에 index값를 넣는다
    // 중복된 값의 index는 앞쪽에 위치하기 때문에 i-1를 해줘서 중복된 값을 배열에 넣어준다
    if (temp !== arrCrypto[i]) {
      temp = arrCrypto[i];
    } else {
      idx.push(i);
      idx.push(i - 1);
    }
  }
  
  if (idx.length === 0 || idx === null) return arrCrypto.join("");
  idx.sort((a, b) => {
    return a - b;
  });
  // splice로 index위치에 있는 값 제거
  idx.forEach((e) => arrCrypto.splice(e, 1, ""));
  // 중복제거
  arrCrypto = arrCrypto.filter((i) => i !== "");
  strCrypto = arrCrypto.join("");
  // 재귀
  return problem2(strCrypto);
}

module.exports = problem2;
