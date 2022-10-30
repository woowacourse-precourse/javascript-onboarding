function problem6(forms) {
  const checkList=makeCheckList(forms);
  var result = getResult(checkList)
  return result;
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

function getResult(arr){
  var result = new Set();
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[i].check.filter((el)=>arr[j].check.includes(el)).length>0){
        result.add(arr[i].email);
        result.add(arr[j].email);
      }
    }
  }
  return [...result];
}