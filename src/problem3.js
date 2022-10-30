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

  const three = 3;
  const six = 6;
  const nine = 9;

  const totalNumberArray = getTotalNumberArray(number);

  const NumberThreeCount = getSpecificNumberCount(totalNumberArray, three);
  const NumberSixCount = getSpecificNumberCount(totalNumberArray, six);
  const NumberNineCount = getSpecificNumberCount(totalNumberArray, nine);
  
  answer = NumberThreeCount + NumberSixCount + NumberNineCount;

  return answer;
}

module.exports = problem3;
