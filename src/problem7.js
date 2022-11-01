function problem7(user, friends, visitors) {
  var answer = [];

  const nameList = getNameList(user, friends, visitors); // name list: [ 'donut', 'andole', 'jun', 'shakevan', 'bedi' ]
  const userFriend = getFriendNameOfUser(user, friends); // friend name of user(mrko): [ 'donut', 'shakevan' ]
  const score = []; // each person's score
  let mutualCount; // number of mutual friends
  let visitCount; // number of visit number

  for (let i = 0; i < nameList.length; i++) {
    const varName = `${nameList[i]}Friend`; // donutFriend, andoleFriend, junFriend, shakevanFriend, bediFriend
    eval(`${varName} = getFriendNameOfUser(nameList[i], friends);`); // get donut's friend, andole's friend, ...
    mutualCount = countMutualItem(userFriend, eval(varName)); // count mutual item in userFriend and varName
    visitCount = countOccurences(visitors, nameList[i]); // count number of occurences in visitors
    score.push(mutualCount * 10 + visitCount);
  }
  const indexFive = getIndOfTopFive(score);
  for (let i = 0; i < indexFive.length; i++) {
    if (countOccurences(userFriend, nameList[indexFive[i]]) === 0) {
      answer.push(nameList[indexFive[i]]);
    }
  }
  return answer;
}

module.exports = problem7;

// function that returns the entire name list except the user
function getNameList(user, friends, visitors) {
  const friendName = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friendName.indexOf(friends[i][j]) === -1 && friends[i][j] !== user) {
        friendName.push(friends[i][j]);
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (friendName.indexOf(visitors[i]) === -1) {
      friendName.push(visitors[i]);
    }
  }

  return friendName;
}

// return friend's name of user
function getFriendNameOfUser(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      userFriend.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      userFriend.push(friends[i][0]);
    }
  }
  return userFriend;
}

// count mutual item in two arrays
function countMutualItem(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
  }
  return count;
}

// count number of occurences in an array
function countOccurences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

// get indices of top five values in an array
function getIndOfTopFive(arr) {
  const index = [];
  let max;
  let i = 0;
  while (i < arr.length) {
    max = Math.max(...arr);
    if (max !== 0 && index.length < 5) {
      index.push(arr.indexOf(max)); // index of max value
      arr[arr.indexOf(max)] = 0; // set max value to 0
    }
    i++;
  }
  return index;
}
