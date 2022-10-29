function problem7(user, friends, visitors) {
  // [ 'donut', 'shakevan' ]
  let alreadyFriendList = [];
  for (let i of friends) {
    if (i[0] === user) {
      alreadyFriendList.push(i[1]);
    } else if (i[1] === user) {
      alreadyFriendList.push(i[0]);
    }
  }

  // [ 'donut', 'andole', 'jun', 'shakevan', 'bedi' ]
  let everyoneList = [];
  for (let i of friends) {
    for (let j = 0; j < 2; j++) {
      everyoneList.push(i[j]);
    }
  }
  for (let i of visitors) {
    everyoneList.push(i);
  }
  everyoneList = [...new Set(everyoneList)];
  everyoneList = everyoneList.filter((element) => element !== user);

  

  let answer = everyoneList;
  return answer;
}

module.exports = problem7;

console.log(problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]));