function problem6(forms) {
  var answer;
  return answer;
  //2. 기능1에서 작성한 함수를 활용한 확인할 문자열 배열과 이메일이 포함된 오브젝트 배열을 생성하는 함수 작성.
  //3. 기능2에서 작성한 함수를 활용해 배열을 비교해 같은 값이 있으면 Set객체에 이메일을 추가해 반환하는 함수 작성.
  //4. 기능3의 함수 반환값을 배열로 변환해 정렬해 반환.
}

module.exports = problem6;

function checkNickName(nickName){
  var checks = [];
  for(var len=2;len<=nickName.length;len++){
    for(var i=0;i<nickName.length;i++){
      if(i+len<=nickName.length){
        checks.push(nickName.substring(i,i+len));
      }
    }
  }
  return checks;
}