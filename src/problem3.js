function problem3(number) {
  let clap = 0;
  for(let i = 1; i <= number; i++){
   for(let clapCount of String(i)){
      if(clapCount == 3 || clapCount == 6 || clapCount == 9){
        clap += 1;
        }
     }
  }
  return clap;
}

module.exports = problem3;
