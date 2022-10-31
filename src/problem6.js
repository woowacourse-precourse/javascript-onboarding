function problem6(forms) {
  // 베열 종류
  var email = [];         // 원문에서 나눌 이메일
  var nickname = [];      // 원문에서 나눌 닉네임

  // 크루 인원 제한
  if(1 <= forms.length && forms.length <= 10000){ // 1명 이상 10,000명 이하
    // 이메일과 닉네임 분리하기
    for(var i=0; i<forms.length; i++){
       email.push(forms[i][0]);       // 이메일
       nickname.push(forms[i][1]);    // 닉네임
    }
  }

  // 이메일 검증
  for(var j=0; j<email.length; j++){
    // 이메일의 길이는 11이상 20미만
    if(11 <= email[j].length < 20){
      // 도메인이 email.com과 일치하는 경우
      var email_check = email[j].indexOf('email.com');
      if(1 <= email_check){
      }else{
        forms.splice(j,1);
      }
    }
  }
  console.log(forms);

  // 닉네임 검증
  const kr = /^[ㄱ-ㅎ|가-힣]+$/; // 한글체크 : 정규표현식 패턴을 사용

  for(var k=0; k<nickname.length; k++){
    // 닉네임의 길이는 1이상 20미만
    if(1 <= nickname[k].length < 20){
      // 문자열에 한글만 있는지 확인
      if( kr.test(nickname[k]) ){
        // 결과값이 true 일때
      }else{
        forms.splice(k,1);
      }
    }
  }
  
  // 닉네임 중복 만들기
  var overlapN1 = []; // 단어 -> 한 글자로 쪼개진걸 담을 배열
  var overlapN2 = []; // 일부로 중복된 단어 생성해서 담을 배열
  for(var n=0; n<forms.length; n++){
    // 닉네임을 한글자씩 나눔
    overlapN1.push( [...forms[n][1]] );
    // 닉네임 중복 생성
    for(var m=0; m<overlapN1[n].length; m++){
      overlapN2.push( [overlapN1[n][m] + overlapN1[n][m+1]] );
    }
  }
  
  // 닉네임 중복 생성 시 예외처리 --> 한글이 아닐경우
  for(var s=0; s<overlapN2.length; s++){
    var testN2 = kr.test(overlapN2[s]);
    if(testN2 === false){     // 닉네임 중복으로 만들때 영문이 있으면
      overlapN2.splice(s,1);  // 삭제함.
    }
  }

  // 중복 제거하기
  var answer=[];
  for(var a=0; a<forms.length; a++){ // 크루 닉네임 명단
    var join = overlapN2[0].join('');
    if(0 <= ( forms[a][1].indexOf(join) ) ){
      // 원본 명단과 비교했을때 닉네임이 중복될경우 닉네임을 0으로 바꿈
      answer.push(forms[a][0]);
    }
  }
  // 오름차순으로 정렬
  answer.sort();

  return answer;
}

module.exports = problem6;
