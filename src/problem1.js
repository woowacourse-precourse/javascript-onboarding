function problem1(pobi, crong) {
  if(pobi.length>2 || crong.length>2){
    return -1;  //예외1
  }
  if(pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1){
    return -1;  //예외2
  }
  if(pobi[0]%2===0 || crong[0]%2===0){
    return -1;  //예외3
  }
  if((pobi[0]<1 || crong[0]<1)||(pobi[1]>400 || crong[1]>400)){
    return -1;  //예외4
  }
  function sum(arr){
    let value= arr.reduce((acc,cur)=>{
      return acc+=parseInt(cur);
    }, 0)
    return value;
  }
  function mul(arr){
    let value= arr.reduce((acc,cur)=>{
      return acc*=parseInt(cur);
    }, 1)
    return value;
  }
  const pobiLeft = pobi[0].toString().split("");
  const pobiRight = pobi[1].toString().split("");
  const pobiValue = Math.max(sum(pobiLeft),mul(pobiLeft),sum(pobiRight),mul(pobiRight));
  
  const crongLeft = crong[0].toString().split("");
  const crongRight = crong[1].toString().split("");
  const crongValue = Math.max(sum(crongLeft),mul(crongLeft),sum(crongRight),mul(crongRight));
  
  return pobiValue === crongValue? 0 : (pobiValue>crongValue? 1 : 2);
}
/*예외1) 입력된 페이지가 2개 이상일 경우 
  예외2) [99,102]와 같이 페이지 수가 1차이가 아닌 경우,
        [99,90]과 같이 오른쪽 페이지가 더 작은 페이지가 나오는 경우
  예외3) [98,99]와 같이 왼쪽 페이지가 짝수인 경우
  예외4) 페이지가 1보다 작거나, 400보다 큰 경우
*/
module.exports = problem1;
