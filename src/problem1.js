function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1) {
    var answer = -1;
    return answer;
  } else if (crong[1] - crong[0] !== 1) {
    var answer = -1;
    return answer;
  }

  const calculateScore = (pages) => {
    const leftPage = String(pages[0])
      .split("")
      .map((str) => Number(str));

    const rightPage = String(pages[1])
      .split("")
      .map((str) => Number(str));

    const findHighScore = (page) => {
      const numberPlus = page.reduce((a, b) => a + b);
      const numberMultiplication = page.reduce((a, b) => a * b);
      if (numberPlus > numberMultiplication) {
        return numberPlus;
      } else if (numberPlus < numberMultiplication) {
        return numberMultiplication;
      } else {
        return numberPlus;
      }
    };

    const leftPageScore = findHighScore(leftPage);
    const rightPageScore = findHighScore(rightPage);

    if (leftPageScore > rightPageScore) {
      return leftPageScore;
    } else if (leftPageScore < rightPageScore) {
      return rightPageScore;
    } else {
      return leftPageScore;
    }
  };

  const pobiScore = calculateScore(pobi);
  const crongScore = calculateScore(crong);

  if (pobiScore > crongScore) {
    var answer = 1;
  } else if (pobiScore < crongScore) {
    var answer = 2;
  } else {
    var answer = 0;
  }

  var answer;
  return answer;
}

module.exports = problem1;
