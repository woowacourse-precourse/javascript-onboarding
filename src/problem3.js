function problem3(number) {
  let count = 0;
  for (let num = 1; num < number + 1; num++){
    const numToString = num.toString().match(/[369]{1}/g);
    if (numToString){
      count += numToString.length;
    }
  }
  return count;
}

module.exports = problem3;
