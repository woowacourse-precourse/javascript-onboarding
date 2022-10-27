function problem3(number) {
  var answer = 0;

  for(let i=0; i<number; i++){
    current = i+1;

    while(current !== 0){
      remainder = current % 10;
      current = parseInt(current / 10);

      if(remainder === 3 || remainder === 6 || remainder === 9){
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
