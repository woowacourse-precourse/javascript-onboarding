function problem2(cryptogram) {
  //cryptogram를 split ''단위로 쪼개서 cryptogram_arr에 배열로 반환
  let cryptogram_arr = cryptogram.split("");

  let i = 0;
  while (i != cryptogram_arr.length) {
    cryptogram_arr[i] == cryptogram_arr[i + 1] //두 문자를 비교해 같은지 확인
      ? (cryptogram_arr.splice(i, 2), (i = 0)) //true splice로 두 문자를 제거, i 0으로 초기화
      : (i += 1); //false i 1증가
  }
  return cryptogram_arr.join("");
}

module.exports = problem2;
