function problem7(user, friends, visitors) {
  let alreadyFriendList = [];
  for (let i of friends) {
    if (i[0] === user) {
      alreadyFriendList.push(i[1]);
    } else if (i[1] === user) {
      alreadyFriendList.push(i[0]);
    }
  }

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

  let everyoneScoreList = [];
  for (let i = 0; i < everyoneList.length; i++) {
    everyoneScoreList.push(0);
  }

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

  for (let i of visitors) {
    for (let j of everyoneList) {
      if (j === i) {
        everyoneScoreList[everyoneList.indexOf(j)] += 1;
      }
    }
  }

  let friendAndScoreDict = {};
  for (let i = 0; i < everyoneList.length; i++) {
    friendAndScoreDict[everyoneList[i]] = everyoneScoreList[i]; 
  }



  let friendAndScoreDictArray = Object.entries(friendAndScoreDict);

  

  for (let i of alreadyFriendList) {
    friendAndScoreDictArray = friendAndScoreDictArray.filter((element) => element[0] !== i);
  }
  
  friendAndScoreDictArray.sort(function(a, b) {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    }
    return b[1] - a[1];
  });

  console.log(friendAndScoreDictArray);

  let result = [];
  let count = 0;
  for (let i of friendAndScoreDictArray) {
    if (i[1] !== 0) {
      if (count < 5) {
        result.push(i[0]);
        count++;
      } else {
        break;
      }
    }
  }

  let answer = result;
  return answer;
}

module.exports = problem7;
