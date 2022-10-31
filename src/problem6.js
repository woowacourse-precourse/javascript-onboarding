function problem6(forms) {
  var answer;
  let testArr = [];

  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1]) {
      for (let j = 0; j < forms[i].length; j++) {
        let find = forms[i][1][j] + forms[i][1][j + 1];
        if (forms[i][1][j + 1]) {
          testArr.push(find);
        }
      }
      
    }
  }
  return testArr; //['x제이','이엠','v제이','이슨','워니','엠제','v제이','이제','제엠'] -> 우선 중복삭제하기
 // forms[0][1] 안에서 다른 애랑 true check되면 해당 check 이메일 입력 // 그다음 sorting
  let find = "문자"; //testArr[0]
  let regex = new RegExp(find, "g");
  answer = regex.test("문자열"); //testArr[0] / 동일 i 제외 / true면 
  return answer;
}

//기능 요구사항
//같은 글자가 연속적으로 포함되면, 이메일 목록 리턴
//제한사항
//2글자 이상 연속문자
//1~10,000명 이하
//이메일 형식에 부합, 전체길이는 11자 이상 20자 미만
// @email.com 도메인으로만 제한
//닉네임은 한글만 가능, 전체길이는 1자 이상 20자 미만
// 이메일 오름차순, 중복 제거?? 중복제거 뭔솔
// -- case 필요한가?
module.exports = problem6;
