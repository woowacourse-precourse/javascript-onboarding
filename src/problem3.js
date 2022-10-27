function problem3(number) {
  let count = 0;
  for (let i = 1; i < number + 1; i++) {
    const arr = String(i).split('');

    arr.forEach(elem => {
      if (elem === '3' || elem === '6' || elem === '9') {
        count += 1;
      }
    })
  }
  
  return count;
}

module.exports = problem3;
