function problem3(number) {
  var nums = [];
  do {
      nums.push(number%10); 
      number = Math.floor(number / 10) 
  } while (number > 0)
  var answer = nums.filter((num) => num !== 0 && num%3 === 0).length
  return answer;
}

module.exports = problem3;
