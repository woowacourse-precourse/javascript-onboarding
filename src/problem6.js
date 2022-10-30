function problem6(forms) {
  const checkList=makeCheckList(forms);
  var answer;
  return answer;;
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

function makeCheckList(forms){
  var checkList=[];
  forms.forEach((el)=>{
    var obj={};
    obj.email=el[0];
    obj.check=checkNickName(el[1]);
    checkList.push(obj);
  });
  return checkList;
}