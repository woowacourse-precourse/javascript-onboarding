function problem1(pobi, crong) {
  const plusMultiple = (array) => {
    const answerArray = [];

    //예외사항
    if (array[1] - array[0] !== 1) return -1;
    if (array[1] % 2 !== 0) return -1;
    if (array[0] % 2 !== 1) return -1;

    for (const element of array) {
      //예외사항
      if (element === (1 || 400)) return -1;

      const array = element.toString().split('');
      let sum = 0;
      array.forEach((el) => {
        sum += Number(el);
      });
      answerArray.push(sum);

      let multiple = 1;
      array.forEach((el) => {
        multiple *= Number(el);
      });
      answerArray.push(multiple);
    }
    return Math.max(...answerArray);
  };

  const pobiAnswer = plusMultiple(pobi);
  const crongAnswer = plusMultiple(crong);

  if (pobiAnswer === -1 || crongAnswer === -1) return -1;

  return pobiAnswer > crongAnswer ? 1 : pobiAnswer === crongAnswer ? 0 : 2;
}

module.exports = problem1;
