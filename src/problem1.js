//commit test
function problem1(pobi, crong) {
  var answer;

pArr = []
cArr = []

pCand = [];
cCand = [];

pMax = 0;
cMax = 0;

answer = 0;

//0.예외처리 전체감싸기
if(pobi[0] %2 != 0 && pobi[1]%2 == 0 && pobi[1]==pobi[0]+1){
//무조건 아이템은 2개인 배열이니까, i < 2.
  for (i = 0; i < 2; i++) {
    //1. 숫자를 스트링으로 바꾼다.
    //2. split한다
    //3. 다시 숫자로 바꾼다.
    digit = (pobi[i].toString().split(''))
    pArr.push(digit.map(Number))
  
    digit = (crong[i].toString().split(''))
    cArr.push(digit.map(Number))
  }
  
  console.log(pArr,cArr)
  
  
  for (i = 0; i < 2; i++) {
    //아이템을 모두 더하기
    add = pArr[i].reduce((a, b) => a + b, 0)
    //아이템을 모두 곱하기
    mul = pArr[i].reduce((a, b) => a * b, 1)
    pCand.push(add,mul)
    pMax = Math.max(...pCand)
  
    add = cArr[i].reduce((a, b) => a + b, 0)
    mul = cArr[i].reduce((a, b) => a * b, 1)
    cCand.push(add,mul)
    cMax = Math.max(...cCand)
  }
  
  //비교
  if(pMax > cMax){
    answer=1
  }else if(pMax < cMax){
    answer=2
  }else if(pMax = cMax){
    answer=0
  }
}else{
  answer = -1;
}

  return answer;
}

module.exports = problem1;