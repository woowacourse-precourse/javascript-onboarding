function problem6(forms) {
  // return answer;
  // var answer;
  // 이메일 신청 확인 함수
  emailSet(forms)
  // 닉네임 신청 확인 함수
  nameSet(forms)

   let nameArr = []
   let returnEmail = []
   let duplicateWord = "";
 
   //2. 닉네임에서 두 글자씩 추출하여 배열에 담기
   forms.map(([email, nickname]) => {
     for (let i = 1; i < nickname.length; i++) {
       nameArr.push(nickname[i - 1] + nickname[i]);
     }
   });    // "엠제", "제이" ...
   //2-2. 두 글자씩 담긴 배열에서 중복되는 단어 찾기
   nameArr.map((e, idx) => {
     if (nameArr.indexOf(e) !== idx) {
       duplicateWord = e;
     }
   });
   //2-3. 중복되는 단어를 가진 닉네임을 통해 결과 이메일 도출
   forms.map(([email, nickname]) => {
     if (nickname.includes(duplicateWord)) {
       returnEmail.push(email);
     }
   });
   //결과 이메일을 정렬하여 리턴
   return returnEmail.sort();
}
console.log(problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]))
module.exports = problem6;

// 작동 프로그램 : 크루의 닉네임 사용에 있어 2글자 이상 중복이 있으면 
// 이메일을 반환하여 확인할 수 있는 프로그램.

// 필요 기능
// 1. 이메일을 신청 받는 기능
  function emailSet(str){
    let emailSet = []

    for(let i=0; i < str.length; i++){
      if(11 <= str.length && str.length <= 20) emailSet
      if(str.includes("@email.com")) emailSet.push(email[i])
      else return false
    }
  }
  // console.log(emailSet("jm@email.com"))
// 1-2. 닉네임을 신청 받는 기능
  function nameSet(str){
    
    let korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if(korean.test(str)) return str;
    else return false; 
  }
  // console.log(nameSet("false"))
  /* 제한  
  1. 이메일은 형식에 맞게 작성 (email.com) 도메인으로만 작성
  2. 이메일은 11자 이상 20자 미만
  3. 닉네임은 한글만 가능  
  4. 닉네임은 1자이상 20자 미안
  */
