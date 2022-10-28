function problem3(number) {
  let count = 0;
  for(let i = 1 ; i <= number ; i++){
    count+=doClap(i);
  }
  return count;
}

const doClap = (number) =>{
  const strNumList = number.toString().split('');
  let claps = 0;
  strNumList.forEach(element => {
    if(element==='3'||element==='6'||element==='9'){
      claps++;
    }
  });
  return claps;
}

module.exports = problem3;
