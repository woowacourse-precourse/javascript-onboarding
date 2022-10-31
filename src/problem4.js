function problem4(word) {
  //문자열 쪼개기
  const aplha = word.split("");

  let answer = aplha.map((r) => {
    const regex = /^[a-z|A-Z]/;

    //정규식으로 알파벳이 아닌 문자 확인
    if (!regex.test(r)) return r;
    
    // 문자가 대문자, 소문자일때 구분
    if (r === r.toUpperCase()) {
      let ascii = r.toLowerCase().charCodeAt(0);
      return String.fromCharCode(122 - ascii + 97).toUpperCase();
    } else {
      let ascii = r.charCodeAt(0);
      return String.fromCharCode(122 - ascii + 97);
    }
  });
  //쪼개진 문자열 합치기
  return answer.join("");
}

module.exports = problem4;
