const getFriendsMap = (friends) => {
  const friendsMap = new Map();
  for (const friendShip of friends) {
    const firstFriendsArray = friendsMap.get(friendShip[0]) || [];
    const secondFriendsArray = friendsMap.get(friendShip[1]) || [];

    if (!firstFriendsArray.includes(friendShip[1])) {
      friendsMap.set(friendShip[0], [...firstFriendsArray, friendShip[1]]);
    }
    if (!secondFriendsArray.includes(friendShip[0])) {
      friendsMap.set(friendShip[1], [...secondFriendsArray, friendShip[0]]);
    }
  }
  return friendsMap;
};

const scoreCommonFriends = (user, friend, friendsMap, scoreObj) => {
  if (friend === user) return;
  const friendsArray = friendsMap.get(friend);
  const userFriendsArray = friendsMap.get(user);
  let score = 0;

  for (const friend of userFriendsArray) {
    if (friendsArray.includes(friend)) score += 10;
  }

  scoreObj[friend] = score;

  return scoreObj;
};

const scoreVisitor = (visitors, scoreObj) => {
  for (const visitor of visitors) {
    let score = scoreObj[visitor] || 0;
    scoreObj[visitor] = score + 1;
  }
};

const getSortedArrayFromObject = (obj) => {
  return Object.entries(obj).sort((a, b) => {
    if (b[1] > a[1]) return 1;
    else if (b[1] < a[1]) return -1;
    else {
      if (a[0] < b[0]) return -1;
      else if (a[0] > b[0]) return 1;
      else return 0;
    }
  });
};

const getHighScoredFriend = (obj, userFriendsArray) => {
  const results = [];

  const friendScoreArray = getSortedArrayFromObject(obj);

  friendScoreArray.forEach((friendScore) => {
    if (
      friendScore[1] !== 0 &&
      !userFriendsArray.includes(friendScore[0]) &&
      results.length < 5
    )
      results.push(friendScore[0]);
  });
  //예외사항 7
  if (results.length == 0) return 'ERROR';

  return results;
};

const checkFriendLength = (friends) => {
  for (const friend of friends) {
    if (friend.length < 1 || friend.length > 30) return false;
  }

  return true;
};

const checkUserID = (user) => {
  const lowerCase = /[a-z]/;
  for (const element of user.split('')) {
    if (!lowerCase.test(element)) return false;
  }
  return true;
};

const getUniqueArray = (array) =>
  [...new Set(array.join('|').split('|'))]
    .map((v) => v.split(','))
    .map((v) => v.map((a) => +a));

const checkCommonFriendsShip = (friends) => {
  const uniqueFriends = getUniqueArray(friends);

  if (uniqueFriends.length !== friends.length) return false;
  return true;
};

function problem7(user, friends, visitors) {
  //예외사항1
  if (user.length < 1 || user.length > 30) return 'ERROR';
  //예외사항2
  if (friends.length < 1 || friends.length > 10000) return 'ERROR';
  //예외사항3
  if (!checkFriendLength(friends)) return 'ERROR';
  //예외사항4
  if (visitors.length > 1000) return 'ERROR';
  //예외사항5
  if (!checkUserID(user)) return 'ERROR';
  //예외사항6
  if (!checkCommonFriendsShip(friends)) return 'ERROR';

  const scoreObj = {};

  const friendsMap = getFriendsMap(friends);

  const userFriendsArray = friendsMap.get(user);
  const friendList = Array.from(friendsMap.keys());

  for (const friend of friendList) {
    scoreCommonFriends(user, friend, friendsMap, scoreObj);
  }

  scoreVisitor(visitors, scoreObj);

  return getHighScoredFriend(scoreObj, userFriendsArray);
}

module.exports = problem7;
