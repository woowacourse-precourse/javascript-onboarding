function problem2(cryptogram) {
  let answer = "";

  const removeDup = str => {
    let text = str.split("");
    // 중복제거
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i + 1]) {
        delete text[i];
        delete text[i + 1];
      }
    }
    // 반복 여부 확인
    if (text.includes(undefined)) {
      answer = text.join("");
      removeDup(answer);
    } else {
      answer = text.join("");
    }
  };
  removeDup(cryptogram);

  return answer;
}

module.exports = problem2;
