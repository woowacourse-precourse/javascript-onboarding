function problem1(pobi, crong) {
  var answer;
  
  let pobiScore;
  let crongScore;

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

  const getBiggestNumber = (numberSum, numberMultiple) => {
    return numberSum > numberMultiple ? numberSum : numberMultiple;
  }

  const getPageScore = (score) => {
    console.log('score : ', score);

    const scoreNumbersArr = (score + '').split('');
    scoreNumbersArr.map((scoreNumber, i) => scoreNumbersArr[i] =  scoreNumber * 1);

    const numbersSum = getNumberSumForPage(scoreNumbersArr);
    const numbersMultiple = getNumberMultipleForPage(scoreNumbersArr);

    const biggestNumber = getBiggestNumber(numbersSum, numbersMultiple);

    return biggestNumber;
  };

  getPageScore(pobi[0]);
  
  return answer;
}

module.exports = problem1;
