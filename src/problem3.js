function problem3(number) {
  let answer;

  let arr = [];
  let sum = 0;

  arr[1] = 0;
  arr[2] = 0;
  arr[3] = 1;

  for (let i = 4; i <= number; i++) {
    let stringI = i.toString();
    let count = 0;

    for (let j = 0; j < stringI.length; j++) {
      if (stringI[j] == "3" || stringI[j] == "6" || stringI[j] == "9") {
        count++;
      }
    }
    arr[i] = arr[i - 1] + count;
  }
  answer = arr[number];
  return answer;
}

module.exports = problem3;