function problem1(pobi, crong) {
  var answer;

  const addAllNums = (num) => {
    if (num < 10) {
      return num;
    }
    return (num % 10) + addAllNums(parseInt(num / 10));
  };

  const multiplyAllNums = (num) => {
    if (num < 10) {
      return num;
    }
    return (num % 10) * multiplyAllNums(parseInt(num / 10));
  };

  const findMax = (num1, num2) => {
    return Math.max(num1, num2);
  };

  const maxNumOfPobi = () => {
    let leftMax_of_pobi = findMax(
      addAllNums(pobi[0]),
      multiplyAllNums(pobi[0])
    );
    let rightMax_of_pobi = findMax(
      addAllNums(pobi[1]),
      multiplyAllNums(pobi[1])
    );
    return findMax(leftMax_of_pobi, rightMax_of_pobi);
  };

  const maxNumOfCrong = () => {
    let leftMax_of_crong = findMax(
      addAllNums(crong[0]),
      multiplyAllNums(crong[0])
    );
    let rightMax_of_crong = findMax(
      addAllNums(crong[1]),
      multiplyAllNums(crong[1])
    );
    return findMax(leftMax_of_crong, rightMax_of_crong);
  };

  let pobi_score = maxNumOfPobi();
  let crong_score = maxNumOfCrong();

  const solution = (pobi_score, crong_score) => {
    if (pobi_score === crong_score) {
      return 0;
    }
    if (pobi_score > crong_score) {
      return 1;
    }
    if (pobi_score < crong_score) {
      return 2;
    }
    return -1;
  };

  answer = solution(pobi_score, crong_score);

  return answer;
}

module.exports = problem1;
