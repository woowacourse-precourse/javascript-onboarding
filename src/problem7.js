function problem7(user, friends, visitors) {
  const findMyFriends = (friends) =>
    friends.filter((item, index) => friends[index][1] === user);
  const myFriends = findMyFriends(friends);

  const friendsArr = myFriends.join(",");
  const friendsArrSplited = friendsArr.split(",");

  const noUser = (friendsArrSplited) =>
    friendsArrSplited.filter(
      (item, index) => friendsArrSplited[index] !== user
    );
  const noUserName = noUser(friendsArrSplited);

  const newFriendsArr = [];

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < noUserName.length; j++) {
      if (friends[i].includes(noUserName[j])) {
        newFriendsArr.push(friends[i][1]);
      }
    }
  }

  const getElScore = (arrA) => {
    let result = {};
    for (const el of arrA) {
      if (el !== user) {
        result[el] = (result[el] || 0) + 10;
      }
    }
    return result;
  };
  const newFriendsScore = getElScore(newFriendsArr);

  const getVisitorsScore = (arrB) => {
    let result = {};
    for (const el of arrB) {
      if (el !== user) {
        result[el] = (result[el] || 0) + 1;
      }
    }
    return result;
  };
  const visitorScore = getVisitorsScore(visitors);

  
}

module.exports = problem7;
