function problem3(number) {
  var answer;
  let count = 0;

  for (let i = 1; i <= number; i++) {
    const currentNum = i.toString().trim().split("").map(Number);

    //3,6,9 포함 개수 count
    for (let j = 0; j < currentNum.length; j++) {
      if (currentNum[j] == 3) {
        count++;
      }
      if (currentNum[j] == 6) {
        count++;
      }
      if (currentNum[j] == 9) {
        count++;
      }
    }
    //console.log(currentNum);
  }

  console.log(count);
  answer = count;
  return answer;
}

module.exports = problem3;
