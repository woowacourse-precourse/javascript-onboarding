function problem3(number) {
  if(exception(number)) return false;
  return countclap(number);
}

const input = {
  max:10000,
  min:1
}

const clap = value => value === '3' || value === '6' || value === '9';

function divide(number){
  const countnumArr = number.toString().split('');
  return countnumArr.filter(clap).length;
}

function countclap(number){
  let clap = 0;
  for(let i=1; i<number+1; i++){
    if(divide(i)){
      totalclap += divide(i);
    }
  }
  return clap;
}

function exception(number){
  if(number<input.min||number>input.max) return true;
  return false;
}


module.exports = problem3;
