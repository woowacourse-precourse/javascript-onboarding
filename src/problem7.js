function problem7(user, friends, visitors) {
  var answer;
  
  let allUser = friendestoArr(friends).concat(visitors);
  
  const set = new Set(allUser);
  const userArr = [...set];
  
  let allUserArr = [];
  for (let i = 0; i < userArr.length; i++) {
    allUserArr.push([userArr[i], 0]);
  }
  
  console.log(allUserArr);

  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
      let findUserFriend = friends[i].indexOf(user);
      if (findUserFriend > 0) userFriend.push(friends[i][1 - findUserFriend]);
  }
  console.log(userFriend);






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