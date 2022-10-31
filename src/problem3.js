


//예외사항
//1<= number <= 10000
//number은 정수

function except(number=0){
  if(Number.isInteger(number)!=true){return -1}
  if(1>number || 10000<number){return -1}
  return 0
}

function action(number=0){
  let count = 0;

  for(let i=0; i<=number; i++){
    let n = i;
    for(let j=0; j<(""+n).length;j++){
      if(n%3==0||n%6==0||n%9==0){count++;}
      n = n/10
    }
  }

  return count;
}

function problem3(number=0) {
  var answer;

  let e = except(number)
  if(e == -1){return -1}

  answer = action(number)

  return answer;
}

module.exports = problem3;

