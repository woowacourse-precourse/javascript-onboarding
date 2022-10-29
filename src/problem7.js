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

  // [ 0, 0, 0, 0, 0 ]
  let everyoneScoreList = [];
  for (let i = 0; i < everyoneList.length; i++) {
    everyoneScoreList.push(0);
  }

  // [ 0, 20, 20, 0, 0 ]
  for (let i of friends) {
    for (let j of alreadyFriendList) {
      if (i[0] === user || i[1] === user) {
        continue
      }
      if (i[0] === j) {
        everyoneScoreList[everyoneList.indexOf(i[1])] += 10;
      } else if (i[1] === j) {
        everyoneScoreList[everyoneList.indexOf(i[0])] += 10;
      } else {
        continue;
      }
    }
  }

  // [ 1, 20, 20, 1, 3 ]
  for (let i of visitors) {
    for (let j of everyoneList) {
      if (j === i) {
        everyoneScoreList[everyoneList.indexOf(j)] += 1;
      }
    }
  }

  // { donut: 1, andole: 20, jun: 20, shakevan: 1, bedi: 3 }
  let friendAndScoreDict = {};
  for (let i = 0; i < everyoneList.length; i++) {
    friendAndScoreDict[everyoneList[i]] = everyoneScoreList[i]; 
  }

  let friendAndScoreDictArray = Object.entries(friendAndScoreDict);

  friendAndScoreDictArray.sort((a, b) => b[1] - a[1]);
  
  for (let i of alreadyFriendList) {
    friendAndScoreDictArray = friendAndScoreDictArray.filter((element) => element[0] !== i);
  }


  let answer = friendAndScoreDictArray;
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