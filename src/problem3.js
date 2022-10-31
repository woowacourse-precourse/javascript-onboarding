function problem3(number) {
  let count = 0;
    for(let i = 0; i <= number; i++){
      let j = i;
      while (j > 0){
        if (j % 10 == 3 || j % 10 == 6 || j % 10 == 9){
            count++;
        }
        j = parseInt(j / 10);
      }
    }
  return count;
}

module.exports = problem3;
