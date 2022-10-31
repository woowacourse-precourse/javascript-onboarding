function problem1(pobi, crong) {
  
  var answer;

  function plusOrMultiply(name) {
    let condition = (name[0] + 1 == name[1]) && (name[0] % 2 == 1 && name[1] % 2 == 0);
    if (condition == true) {
      let tmpArr = name.join('');
      const toNumArr = (a) => Number(a);
      tmpArr = Array.from(tmpArr, toNumArr);
      const sum = tmpArr.reduce((a,b) => (a+b));
      const multiply = tmpArr.reduce((a, b) => (a*b));
      let num = sum > multiply ? sum : multiply;
      return num;
    } else {
      return false;
  }
  return answer;
}

module.exports = problem1;
