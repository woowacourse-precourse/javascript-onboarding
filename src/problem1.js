function problem1(pobi, crong) {
  var answer;

  const getPageNumberArr = score => {

    const pageNumberArr = (score + '').split('');
    pageNumberArr.map((pageNumber, i) => pageNumberArr[i] =  pageNumber * 1);

    return pageNumberArr;
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

    const scoreNumbersArr = getPageNumberArr(score);

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

    const isError1 = pagesArr[1] - pagesArr[0] !== 1 ? -1 : 1;
    const isError2 = pagesArr[0]%2 === 1 ? 1 : -1; 
    const isError3 = pagesArr[1]%2 === 0 ? 1 : -1;
    
    const isError = isError1 * isError2 * isError3;

    return isError;
  }

  const getTotalError = (totalPeoplePagesArr) => {
    let totalError = 1;

     totalPeoplePagesArr.map(personsPage => {
      totalError = totalError * getError(personsPage);
     })

     return totalError
  }

  const pobiScore = getBiggestNumber(getPageScore(pobi[0]), getPageScore(pobi[1]));
  const crongScore = getBiggestNumber(getPageScore(crong[0]), getPageScore(crong[1]));
  const pageError = getTotalError([pobi, crong]);

  answer = pageError === -1 ? pageError :  getWinner(pobiScore, crongScore);

  return answer;
}

module.exports = problem1;
