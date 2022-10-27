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

  const getWinner = (totalPeoplePagesArr) => {

    const peoplesScoreArr = [];
    totalPeoplePagesArr.map(personPages => {
      peoplesScoreArr.push( getBiggestNumber(getPageScore(personPages[0]), getPageScore(personPages[1])) );
    })

    const isTie = peoplesScoreArr.every(score => score === peoplesScoreArr[0]);
    const winnerIndex = peoplesScoreArr.indexOf(Math.max(...peoplesScoreArr)) + 1;

    result = isTie === true ? 0 : winnerIndex;

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

  const getTotalPeoplePagesArr = people => {
    const totalPeoplePagesArr = [];
    for(const personsPage in people) {
      totalPeoplePagesArr.push(people[personsPage]);
    }

    return totalPeoplePagesArr;
  }

  const totalPeoplePagesArr = getTotalPeoplePagesArr(arguments);
  const pageError = getTotalError(totalPeoplePagesArr);

  answer = pageError === -1 ? pageError :  getWinner(totalPeoplePagesArr);

  return answer;
}

module.exports = problem1;
