function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    String(i).split('').forEach(elem => {
      if (elem == '3' || elem == '6' || elem == '9') {
        count++;
      }

    })
  }
 
  return count; 
}

module.exports = problem3;
