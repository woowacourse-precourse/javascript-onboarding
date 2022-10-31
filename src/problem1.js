//pobi, crong은 배열,길이 2
//배열 내의 두 숫자는 근접해야 함
//각 자리끼리 더하거나 곱한 값을 비교함

//숫자는 400까지
//포비가 이기면 1
//크롱이 이기면 2
//무승부 0 예외 -1
//시작과 마지막은 나오면 안되므로 [1,2] , [399.400]
//도 안됨

function except(pobi=[], crong=[]){

  //0. 배열인지 확인(Array.isArray)
  if(Array.isArray(pobi)!=true 
  || Array.isArray(crong)!=true ){
    return -1;
  }
  
  //1. 배열 길이 조건
  if(pobi.length !=2 || crong.length != 2){
    return -1;
  }


  //3.숫자는 3미만 398초과은 아웃
  //추가 - isNaN으로 숫자인지 확인
  //숫자가 아니면 true를 리턴한다. 
  for(let i=0; i<2 ; i++){

    if(isNaN(pobi[i]==true) || isNaN(crong[i]==true)){
      return -1;
    }

    if(3 > pobi[i] || 398 < pobi[i]
    ||3> crong[i] || 398 < crong[i]){
      return -1;
    }

  }

  //2.왼쪽은 홀수 오른쪽은 짝수
  if(pobi[0]%2!=1 || pobi[1]%2!=0 
    || crong[0]%2!=1 || pobi[1]%2!=0){
      return -1;
    }

  //4.두 숫자는 인접해야 하고 오른쪽이 더 커야함
  if((pobi[1]-pobi[0])!=1
  ||crong[1]-crong[0]!=1){
    return -1;
  }

  


  return 0;
}

function problem1(pobi=[], crong=[]) {
  let answer;


  let e = except(pobi,crong);
  if(e == -1){
    return -1;
  }

  return answer;
}

module.exports = problem1;
