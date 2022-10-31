function problem2(cryptogram) {
  var answer;
  const str=[];
  for(let i=0;i<cryptogram.length;i++){
    if(str.length==0){//받은 배열이 비어있는지 확인
      str.push(cryptogram[i]);//비어있다면 배열에 푸쉬
    }
    else{//배열이 비어있지 않을때
      if(str[str.length-1]==cryptogram[i]){//비어있지 않다면 마지막에 넣은 배열과 비교
        str.pop();//같다면 삭제
      }
      else{
        str.push(cryptogram[i]);//다르다면 푸쉬
      }
    }
  }
  answer=str.join('');
  return answer;
}

module.exports = problem2;
