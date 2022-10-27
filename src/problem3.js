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
  

  return answer;
}

module.exports = problem3;
