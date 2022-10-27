function problem3(number) {
  let count = 0;

  stringArray = []
  for (let num = 1; num < (number + 1); num++) {
    stringNum = String(num);
    stringArray.push(stringNum.split(""))
  }

  const flatArray = stringArray.flat();
  count = flatArray.filter(element => '3' === element || '6' === element || '9' === element).length;
  
  let answer = count;
  return answer;
}

module.exports = problem3;
