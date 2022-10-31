function problem3(number) {
  let res = 0;

  for (let i = 3; i <= number; i++) {
    res += clapCount(i);
  }

  return res;
}

module.exports = problem3;

const clapCount = n => {
  let count = 0;
  const arr = [...String(n)]; 

  const threeCount = arr.filter(a => a == '3').length;
  const sixCount = arr.filter(a => a == '6').length;
  const nineCount = arr.filter(a => a == '9').length;
  
  count += threeCount + sixCount + nineCount;

  return count;
}