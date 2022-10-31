function problem6(forms) {
  // 제한사항 체크
  if (isVaildInput(forms)) return false;
  /**
   * - 크루는 1명 이상 10,000명 이하
   * - 이메일은 이메일 형식에 부합하며 길이는 11자 이상 20자 미만
   * - 신청할 수 있는 이메일은 `email.com` 도메인으로 제한
   * - 닉네임은 한글만 가능, 길이는 1자 이상 20자 미만
   * @param {string[][]} input 
   * @returns {boolean}
   */
  function isVaildInput (input) {
    // 크루 인원 조건 체크
    if (input.length < 1 || input.length > 10000) return true;

    input.map((v)=>{
      // 크루의 이메일 형식 및 글자수 체크
      if (!v[0].match(/[\w\-\.]+\@email.com+$/g) || v[0].length < 10 || v[0].length > 20) return true;

      // 크루의 닉네임 한글 및 글자수 체크
      if (!v[1].match(/[가-힣]/g) || v[1].length < 1 || v[1].length > 19) return true;
    });
    return false;
  }

  /**
   * 닉네임 문자열을 2글자씩 자르고 중복되는 경우만 배열에 저장
   * @param {string[][]} forms 
   * @returns {string[]} 중복된 문자열들이 저장된 배열
   */
  function writeOverlapWord (forms){
    const nicknameWord = [];
    forms.forEach(([_,nickname]) => {
      for (let i = 0; i < nickname.length - 1; i++){
        const word = nickname.substring(i,i+2);
        nicknameWord.push(word);
      };
    });
    const filtered = nicknameWord.filter((item, index) => nicknameWord.indexOf(item) !== index);
    return [...new Set(filtered)];
  }

}
module.exports = problem6;
