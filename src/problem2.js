function problem2(cryptogram) {
  //중복 여부 확인
  let isHave = true;
  //문자 배열 생성
  let str = [...cryptogram];

  while (isHave) {
    isHave = false;
    str.forEach((c, i) => {
      if (c === str[i + 1]) {
        // 중복 문자열 제거
        cryptogram = strEdit(cryptogram, c);
        //이번 암호에 중복 문자열이 있다는 것
        isHave = true;
      }
    });
    //문자 배열 초기화
    str = [...cryptogram];
  }

  return cryptogram;
}

// 중복 문자열 제거
const strEdit = (str, char) => {
  const arr = str.split(`${char}${char}`);
  return arr[0].concat(arr[1]);
};

module.exports = problem2;
