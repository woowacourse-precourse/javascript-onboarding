function problem3(number) {
  var answer;

  var numberString = [];
  var num = 0;
  
  for (var i = 1; i <= number; i++) {
    numberString.push(i);
  }

  let nums = numberString.join("");
  for (var i = 0; i < nums.length; i++) {
    if (
      nums[i] === "3" ||
      nums[i] === '6' ||
      nums[i] === '9'
    ) {
      num = num + 1;
    }
  }
  return num;
}

module.exports = problem3;
