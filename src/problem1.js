//pobi, crong은 배열,길이 2
//배열 내의 두 숫자는 근접해야 함
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
    console.log("arr.length != 2")
    return -1;
  }


  //3.숫자는 3미만 398초과은 아웃
  //추가 - typeof로 숫자인지 확인
  //숫자가 아니면 true를 리턴한다. 
  for(let i=0; i<2 ; i++){

    if(typeof(pobi[i])!="number" || typeof(crong[i])!="number"){
      console.log("isNaN")
      return -1;
    }

    //추가- 정수인지 판별
    if(Number.isInteger(pobi[i])!=true ||
    Number.isInteger(crong[i])!=true){
      console.log("not integer")
      return -1;s
    }

    if(3 > pobi[i] || 398 < pobi[i]
    ||3> crong[i] || 398 < crong[i]){
      console.log("3미만 398이상임")
      return -1;
    }

  }

  //2.왼쪽은 홀수 오른쪽은 짝수
  if(pobi[0]%2!=1 || pobi[1]%2!=0 
    || crong[0]%2!=1 || pobi[1]%2!=0){
      console.log("홀짝이 아니라 짝홀임")
      return -1;
    }

  //4.두 숫자는 인접해야 하고 오른쪽이 더 커야함
  if((pobi[1]-pobi[0])!=1
  ||crong[1]-crong[0]!=1){
    console.log("두 수가 인접하지 않거나 오른쪽이 더 작음")
    return -1;
  }
  console.log("이상무")
  return 0;
}

//각 자리끼리 더하거나 곱한 값을 비교함

//숫자는 400까지
//포비가 이기면 1
//크롱이 이기면 2
//무승부 0 예외 -1
function numAdd(n){
  let a = 0;
  for(let i =2; i> 0 ; i++){
    a += n%(10**i)
    n = parseInt(n/10)
  }
  return a;
}

function numMul(n){
  let a= 0;
  for(let i =2; i> 0 ; i++){
    a *= n%(10**i)
    n = parseInt(n/10)
  }
  return a;
}


function action(pobi=[],crong=[]){
  let [pobiLeftAdd, pobiLeftMul, crongLeftAdd, crongLeftMul] = [0,0,0,0]
  let [pobiRightAdd, pobiRightMul, crongRightAdd, crongRightMul] = [0,0,0,0]
  let [pobiNum, crongNum] = [0,0]

  pobiLeftAdd = numAdd(pobi[0])
  pobiLeftMul = numMul(pobi[0])
  pobiRightAdd = numAdd(pobi[1])
  pobiRightMul = numMul(pobi[1])

  crongLeftAdd = numAdd(crong[0])
  crongLeftMul = numMul(crong[0])
  crongRightAdd = numAdd(crong[1])
  crongRightMul = numMul(crong[1])

  //숫자 확인
  console.log("숫자확인")
  console.log(pobiLeftAdd, pobiLeftMul, pobiRightAdd, pobiRightMul)
  console.log(crongLeftAdd, crongLeftMul,crongRightAdd, crongRightMul)

  //가장 큰 값 넣기 Math.max()
  pobiNum = Math.max(pobiLeftAdd, pobiLeftMul,pobiRightAdd, pobiRightMul)
  crongNum = Math.max(crongLeftAdd, crongLeftMul,crongRightAdd, crongRightMul)

  console.log("큰 값 확인")
  console.log(pobiNum, crongNum)

  if(pobiNum == crongNum){return 0}
  else if(pobiNum > crongNum){return 1}
  else if(pobiNum < crongNum){return 2}
  else {return -1}

  
}


function problem1(pobi=[], crong=[]) {
  let answer;

  console.log(pobi,crong)

  const e = except(pobi,crong);
  if(e == -1){
    return -1;
  }

  answer = action(pobi,crong)
  console.log(`answer: {answer}`)
  return answer;
}

module.exports = problem1;
