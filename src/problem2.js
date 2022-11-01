function problem2(cryptogram) {

  let answer;
  
  //문자열은 불변값이기 때문에 항상 새로운 문자열을 생성한 후 반환하므로 문자열을 배열로 바꿔주기
  let cryptogramList = Array.prototype.slice.call(cryptogram);


  //전 문자의 인덱스를 저장해서 현재 문자와 같을시 값 삭제해주기
  for (let i=0;i<cryptogramList.length;i++){
    if (i == 0){
      prev=0;
      continue;
    }
    if (cryptogramList[i]==cryptogramList[prev])
    {
      cryptogramList.slice(prev,2)
  
    }  
      
  }
  
  return answer;
}




module.exports = problem2;
