function problem6(forms) {
  //닉네임 두 글자씩 잘라서 담을 배열
  let wordsArray = new Array();
  //결과 이메일이 담길 배열
  let resultEmail = new Array();
  //중복 단어를 담을 변수
  let duplicateWord = "";

  //form의 닉네임에서 두 글자씩 추출하여 배열에 담기
  forms.map(([email, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      wordsArray.push(nickname[i - 1] + nickname[i]);
    }
  });
  //두 글자씩 담긴 배열에서 중복되는 단어 찾기
  wordsArray.map((v, i) => {
    if (wordsArray.indexOf(v) !== i) {
      duplicateWord = v;
    }
  });
  //중복되는 단어를 가진 닉네임을 통해 결과 이메일 도출
  forms.map(([email, nickname]) => {
    if (nickname.includes(duplicateWord)) {
      resultEmail.push(email);
    }
  });
  //결과 이메일을 정렬하여 리턴
  return resultEmail.sort();
}
module.exports = problem6;
