function problem7(user, friends, visitors) {
  let friendScoreObj = {};
  const userFriendsArr = getUserFriends(user, friends);
  score10(friends, userFriendsArr, friendScoreObj);
  score1(visitors, userFriendsArr, friendScoreObj);

  return result(friendScoreObj);
}

function getUserFriends(user, friends) {
  let friendArr = [user];

  friends.forEach((el) => {
    if (el[0] === user) friendArr.push(el[1]);
    else if (el[1] === user) friendArr.push(el[0]);
  });

  return friendArr;
}

function score10(friends, userFriends, obj) {
  if (userFriends.length === 1) return;

  friends.forEach((el) => {
    let isUserFriend1 = userFriends.includes(el[0]);
    let isUserFriend2 = userFriends.includes(el[1]);

    if (isUserFriend1 === false && isUserFriend2 === true)
      obj[el[0]] ? (obj[el[0]] += 10) : (obj[el[0]] = 10);
    else if (isUserFriend1 === true && isUserFriend2 === false)
      obj[el[1]] ? (obj[el[1]] += 10) : (obj[el[1]] = 10);
  });
}

function score1(visitors, userFriends, obj) {
  visitors.forEach((el) => {
    if (!userFriends.includes(el)) obj[el] ? (obj[el] += 1) : (obj[el] = 1);
  });
}

function result(obj) {
  let resultArr = [];
  const objectToSortedArr = Object.entries(obj).sort((a, b) => {
    if (b[1] - a[1] === 0) return a[0].localeCompare(b[0]);
    return b[1] - a[1];
  });
  const repeatCount = objectToSortedArr.length < 5 ? objectToSortedArr.length : 5;

  for (let i = 0; i < repeatCount; i++) {
    resultArr.push(objectToSortedArr[i][0]);
  }

  return resultArr;
}

module.exports = problem7;
