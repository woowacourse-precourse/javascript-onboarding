function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;

function numberArr(number){
  let arr=[];
  for(let i=1; i<=number; i++){
    arr.push(i.toString());
  }
  return arr.join('')
  .split('')
  .map((el)=>Number(el));
}

function numberCount(number){
  const answerNumber=[3,6,9];
  const arr=numberArr(number);
  let count=0;
  arr.map((el)=>{
    if(answerNumber.includes(el)){
      count++;
    }
  })
  return count;
}
