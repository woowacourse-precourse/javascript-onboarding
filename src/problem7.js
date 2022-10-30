function problem7(user, friends, visitors) {
  var answer;
  let emptyArr = [];
  
  let allUser = friendestoArr(friends).concat(visitors);
  
  const set = new Set(allUser);
  const userArr = [...set];
  
  for (let i = 0; i < userArr.length; i++) {
    emptyArr.push([userArr[i], 0]);
  }
  
  console.log(emptyArr);

  return answer;
}

function friendestoArr(arr) {
  let result = arr.reduce((acc, cur) => {
    return acc.concat(cur);
  });
  return result;
}

module.exports = problem7;

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);