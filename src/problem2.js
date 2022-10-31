function problem2(cryptogram) {
  let answer;
  let s=0, e=1;
  let cnt=1;
  let cryptogramArr =cryptogram.split("") //문자열인 cryptogram를 배열로 만듦
  while(s<cryptogramArr.length){//시작 인덱스인 s가 cryptogram의 길이를 넘어가면 종료
    if(cryptogramArr[s] === cryptogramArr[e]){ //만약 현재 인덱스의 문자와 다음 인덱스 문자가 같다면 
      cnt++; //카운트 증가
      e++; //끝 배열 값 증가 - 이유 : 연속 문자가 2개 이상일 경우가 있을 경우를 위해
    }else{
      if(cnt>1){ //초기값이 1이므로 1이 넘어가면 연속 문자 있다고 판단
        cryptogramArr.splice(s,cnt); //중복 문자 시작 배열부터 카운트 한 개수 없애줌
        s=0; //이후 전체 초기화하여 처음부터 다시 반복
        e=1 ;
        cnt=1;
      }else{ //중복 문자가 없다면 시작 인덱스 값과 끝 인덱스 값 1씩 증가해서 다시 비교
        s++;
        e++;
      }
    }
  }
  answer = cryptogramArr.join(""); //중복 문자 제외한 나머지 배열 합쳐서 문자로 만들어줌
  return answer;
}

module.exports = problem2;
