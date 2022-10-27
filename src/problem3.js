function problem3(number) {
  var answer;

  const getTotalNumberArray = number => {
    let totalNumberString = '';

    for(let i = 1; i<=number; i++){
      totalNumberString = totalNumberString + String(i);
    }

    const totalNumberArray = totalNumberString.split('');

    return totalNumberArray;
  };

  const getSpecificNumberCount = (totalNumberArray, numberForCount) => {
    const count = totalNumberArray.reduce((acc, cur) => (      
      cur === String(numberForCount) ? acc + 1 : acc
    ),0)

    return count;
  };

  const totalNumberArray = getTotalNumberArray(number);

  const NumberThreeCount = getSpecificNumberCount(totalNumberArray, 3);
  const NumberSixCount = getSpecificNumberCount(totalNumberArray, 6);
  const NumberNineCount = getSpecificNumberCount(totalNumberArray, 9);
  
  answer = NumberThreeCount + NumberSixCount + NumberNineCount;

  return answer;
}

module.exports = problem3;
