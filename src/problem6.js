function problem6(forms) {
  let answer = [];
  let nicknameArr = [];
  let overlapWord = "";
  let resultArr = [];

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
  //닉네임 배열중에 중복된 닉네임이 있는 경우에만 이메일만 넣은 배열 생성
  forms.map(([email, nickname]) => {
    if (nickname.includes(overlapWord)) {
       resultArr.push(email);
    }
  });
  //sort 함수 사용하여 메일 내림차순 정렬 
  answer = resultArr.sort();
  
  return answer;
}

module.exports = problem6;
