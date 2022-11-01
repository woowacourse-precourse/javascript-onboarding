//입력값 = [[이메일, 닉네임]...]

//닉네임에 중복된 글자가 있는 크루의 이메일을 출력함
//두글자 이상의 문자가 연속적으로 
//순서에 맞게 포함되어 있는 경우 중복처리

//[이메일,닉네임]의 길이는 2
//크루는 1명 이상 10000명 이하
//이메일은 이메일형식에 부합, (이부분은 정규표현식으로)
//전체 길이 11자 이상 20자 미만
//신청할 수 있는 이메일은 email.com으로 제한
//닉네임은 한글만 가능하고 전체길이 1-19
//result는 문자열을 오름차순으로 sort함

function exceptForm(forms=[[]]){
  //크루 1-10000
  if(forms.length<1||10000<forms.length){return -1}
  return 0;
}

function exceptCrew(crew=["",""]){
  //crew 길이 2
  if(crew.length!=2){return -1}
  //이메일 제한
  //\w는 숫자 영어 _를 의미
  let emailReg = /[\w\.\-]+\@email.com/g
  if(crew[0].match(emailReg)!=true){return -1}
  //닉네임 제한
  let nickReg = /[ㄱ-ㅎ가-힣]/g
  if(crew[1].match(nickReg)!=true){return -1}

  return 0
}

function action(forms=[[]]){
  
}

function problem6(forms=[[]]) {
  var answer;

  let eForm = exceptForm(forms)
  if(eForm == -1){return -1}



  return answer;
}

module.exports = problem6;
