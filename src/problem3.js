function problem3(number) {
  if (number >= 1 && number <= 10000 && Number.isInteger(number)){
      let answer = 0;
      let i = 0;
      
      while (i <= number) {
        if (/[369]/.test(i) == true) {
          let numberOfOccurrence = i.toString().match(/[369]/g).length;
          answer = answer + numberOfOccurrence;
          i++;
        } else {
          i++;
        }
      }
      return answer;
  }
  
}

module.exports = problem3;
