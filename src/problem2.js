function problem2(cryptogram) {
  //자르기 편하게 배열로 변환
  cryptogram=cryptogram.split("");
  for(let i=1; i<cryptogram.length; i++){
      //이전 인덱스와 현재 인덱스의 값이 같다면
      if(cryptogram[i]==cryptogram[i-1]){
          let count=1; //자르는 갯수
          let j=i;
          //같지 않을때 까지 인덱스를 올려준다.
          while(cryptogram[j]==cryptogram[j-1]){
              count++;
              j++;
          }
            //같은 갯수만큼 잘라준다.
            cryptogram.splice(i-1,count);
            i=0;
      }
  }
  //다시 문자열로 변환
  cryptogram=cryptogram.join("");
  return cryptogram;
}

module.exports = problem2;
