function problem3(number) {
  let count = 0;
  for(let i = 1; i <= number; i++) {
    if(i < 10) {
      if(i === 3 || i === 6 || i === 9) count++;
    } else {
      const num = String(i).split('');
      for(let i = 0; i < num.length; i++) {
        if(num[i] == 3 || num[i] == 6 || num[i] == 9) {
          count++;
        }
      }
    }
  }
  return count;
}
module.exports = problem3;
