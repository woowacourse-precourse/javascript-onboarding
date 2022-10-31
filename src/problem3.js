function problem3(number) {
  let sum = 0;
  const r369 = /[369]/g;

  for(let i = 1; i <= number; i++){
    if((i+'').match(r369)){
      sum += ((i+'').match(r369)).length;
    }
  }
  return sum;
}

module.exports = problem3;
