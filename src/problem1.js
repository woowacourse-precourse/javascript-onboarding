function problem1(pobi, crong) {
  var answer = play(pobi,crong);
  
  return answer;
}

module.exports = problem1;

function add(number){
  return number.toString().split('').reduce((a,b)=>Number(a)+Number(b));
}

function multiply(number){
  return number.toString().split('').reduce((a,b)=>Number(a)*Number(b));
}

function bigNumbers(person){
  return Math.max(...person.map((el)=>{
      return Math.max(add(el),multiply(el));
  }));
}

function error(person){
  const left = person[0];
  const rigth = person[1];
  if(person.length!==2){
    return false;
  }
  if((rigth-left)!==1){
      return false;
  }
  if(left > rigth){
      return false;
  }
  if(left<=1 || rigth>=400){
      return false;
  }
  if((left%2)!==1 || (rigth%2)!==0){
      return false;
  }
  return true;
}

function play(pobi,crong){
  const POBIWIN = 1; 
  const CRONGWIN = 2;         
  const TIE = 0;

  if(!error(pobi) || !error(crong)){
      return -1;
  }
  if(bigNumbers(pobi)===bigNumbers(crong)){
      return TIE;
  }
  if(bigNumbers(pobi)>bigNumbers(crong)){
      return POBIWIN;
  }
  if(bigNumbers(pobi)<bigNumbers(crong)){
      return CRONGWIN;
  }
}