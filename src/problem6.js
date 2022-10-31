function problem6(forms) {
  let answer = [];
  let nicknameArr = [];
  let overlapWord = "";

  //for문을 돌면서 닉네임 2글자씩 넣은(1부터 시작하여 그 앞문자열까지 문자열로 만든)배열 생성
  forms.map(([email, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      nicknameArr.push(nickname[i - 1] + nickname[i]);
    }
  });
  //filter 함수 사용하여 중복문자열 찾아주기
  nicknameArr.filter((element, index) => {
    if (nicknameArr.indexOf(element) !== index) {
        overlapWord = element;
      }
  });
  
  return answer;
}

module.exports = problem6;
