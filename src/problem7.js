function problem7(user, friends, visitors) {
  var answer;
  
  let allUser = friendestoArr(friends).concat(visitors);
  
  const set = new Set(allUser);
  const userArr = [...set];

  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
      let findUserFriend = friends[i].indexOf(user);
      if (findUserFriend > 0) userFriend.push(friends[i][1 - findUserFriend]);
  }
  let acquaintanceArr = [];
  for (let i = 0; i < userFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][i] != user) {
        acquaintanceArr.push(friends[j][1 - i]);
      }
    }
  }
  let acquaintance = acquaintanceArr
  .filter(x => !userFriend.includes(x))
  .filter(x => x !== user);
  
  let UserwithScore = [];
  for (let i = 0; i < acquaintance.length; i++) {
    UserwithScore.push([acquaintance[i], 10]);
  }

  for (let i = 0; i < UserwithScore.length; i++) {
    for (let j = i + 1; j < UserwithScore.length; j++) {
      if (UserwithScore[i][0] == UserwithScore[j][0]) {
        UserwithScore[i][1] += UserwithScore[j][1];
        UserwithScore.splice(j, 1);
        console.log(UserwithScore);
      }
    }
  }

  console.log(`ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`);
  console.log(UserwithScore);

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