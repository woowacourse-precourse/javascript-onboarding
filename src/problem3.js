function problem3(number) {
  var answer;

  const getTotalNumberArray = number => {
    let totalNumberString = '';

    for(let i = 1; i<=number; i++){
      totalNumberString = totalNumberString + String(i);
    }

    const totalNumberArray = totalNumberString.split('');

    console.log(totalNumberArray);

    return totalNumberArray;
  };

  const getSpecificNumberCount = (totalNumberArray, numberForCount) => {
    const count = totalNumberArray.reduce((acc, cur) => (      
      cur === String(numberForCount) ? acc + 1 : acc
    ),0)

    return count;
  };
  

  return answer;
}

module.exports = problem3;
