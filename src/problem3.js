const devideNumber = (number) => {
  const numberArray = number.toString().split("").map(Number);
  return numberArray;
};

const count369 = (array) => {
  let count = 0;
  for (const number of array) {
    if (isDivideWith3(number)) {
      count++;
    }
  }
  return count;
};

const isDivideWith3 = (number) => {
  if (number !== 0 && number % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += count369(devideNumber(i));
  }
  return answer;
}

module.exports = problem3;
