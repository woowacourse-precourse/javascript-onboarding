function problem1(pobi, crong) {
  var answer;

  if(pobi[0] < 1 || pobi[1] > 400) return -1;
  if(crong[0] < 1 || crong[1] > 400) return -1;

  if(pobi[1] - pobi[0] !== 1) return -1;
  if(crong[1] - crong[0] !== 1) return -1;

  if(pobi[0] % 2 !== 1 || pobi[1] % 2 !== 0) return -1
  if(pobi[0] % 2 !== 1 || pobi[1] % 2 !== 0) return -1

const bigNum = (arr) => {
  let big;
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const changeNum = (arg) => Number(arg)
    let num = String(arr[i]).split('').map(changeNum).reduce((prev, curv) => prev + curv)
    newArr.push(num)
    num = String(arr[i]).split('').map(changeNum).reduce((prev, curv) => prev * curv)
    newArr.push(num)
    num;
  }
  newArr.sort((a, b) => b - a)
  big = newArr[0]
  return big
}

if(bigNum(pobi) > bigNum(crong)) {
  return 1
} else if (bigNum(pobi) < bigNum(crong)) {
  return 2
} else if (bigNum(pobi) === bigNum(crong)) {
  return 0
}

return answer;
}

module.exports = problem1;
