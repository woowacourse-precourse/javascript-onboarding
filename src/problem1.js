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

  
  return answer;
}

module.exports = problem1;
