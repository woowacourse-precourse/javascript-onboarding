function problem1(pobi, crong) {
  const isError = errorHandler(pobi, crong);

  if (isError) {
    return -1;
  }

  const pobiScore = score(pobi);
  const crongScore = score(crong);

  if (pobiScore === crongScore) {
    return 0;
  } else {
    return pobiScore > crongScore ? 1 : 2;
  }

  function errorHandler(a, b) {
    if (a[1] - a[0] !== 1 || b[1] - b[0] !== 1) {
      return true;
    } else if (a[0] <= 1 || b[0] <= 1 || a[0] >= 400 || b[0] >= 400) {
      return true;
    } else {
      return false;
    }
  }

  function maximum(n) {
    const numbers = n
      .toString()
      .split("")
      .map((item) => parseInt(item));
    let sumValue = numbers[0];
    let multiplyValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      sumValue += numbers[i];
      multiplyValue *= numbers[i];
    }

    return sumValue >= multiplyValue ? sumValue : multiplyValue;
  }

  function score(pages) {
    const leftScore = maximum(pages[0]);
    const rightScore = maximum(pages[1]);

    return leftScore >= rightScore ? leftScore : rightScore;
  }
}

module.exports = problem1;
