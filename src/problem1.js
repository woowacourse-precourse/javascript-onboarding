function problem1(pobi, crong) {
  var answer;

  const getScoreNumberArr = score => {

    const scoreNumbersArr = (score + '').split('');
    scoreNumbersArr.map((scoreNumber, i) => scoreNumbersArr[i] =  scoreNumber * 1);

    return scoreNumbersArr;
  }

  const getNumberSumForPage = scoreNumbersArr => {

    const numberSum = scoreNumbersArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0)

    return numberSum;
  };

  const getNumberMultipleForPage = scoreNumbersArr => {
    
    const numberMultiple = scoreNumbersArr.reduce((acc, cur) => {
      return acc * cur;
    }, 1)

    return numberMultiple;
  };

  const getBiggestNumber = (number1, number2) => {

    return number1 > number2 ? number1 : number2;
  }

  const getPageScore = (score) => {

    const scoreNumbersArr = getScoreNumberArr(score);

    const numbersSum = getNumberSumForPage(scoreNumbersArr);
    const numbersMultiple = getNumberMultipleForPage(scoreNumbersArr);

    const biggestNumber = getBiggestNumber(numbersSum, numbersMultiple);

    return biggestNumber;
  };

  const getWinner = (pobiScore, crongScore) => {

    const result = pobiScore > crongScore ? 1 : pobiScore < crongScore ? 2 : 0;
    return result;
  }

  const getError = pagesArr => {

    const isError = pagesArr[1] - pagesArr[0] !== 1 ? -1 : 1;
    return isError;
  }

  const getTotalError = (pobi, crong) => {
    return getError(pobi) * getError(crong);
  }

  const pobiScore = getBiggestNumber(getPageScore(pobi[0]), getPageScore(pobi[1]));
  const crongScore = getBiggestNumber(getPageScore(crong[0]), getPageScore(crong[1]));
  const pageError = getTotalError(pobi, crong);

  answer = pageError === -1 ? pageError :  getWinner(pobiScore, crongScore);

  return answer;
}

module.exports = problem1;
