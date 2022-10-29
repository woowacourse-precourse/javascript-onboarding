function problem7(user, friends, visitors) {
  const findMyFriends = (friends) =>
    friends.filter((item, index) => friends[index][1] === user);
  const myFriends = findMyFriends(friends);
  console.log(myFriends);

  const friendsArr = myFriends.join(",");
  const friendsArrSplited = friendsArr.split(",");
  console.log(friendsArrSplited);

  const noUser = (friendsArrSplited) =>
    friendsArrSplited.filter(
      (item, index) => friendsArrSplited[index] !== user
    );
  const noUserName = noUser(friendsArrSplited);
  console.log(noUserName);

  const newFriendsArr = [];

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < noUserName.length; j++) {
      if (friends[i].includes(noUserName[j])) {
        newFriendsArr.push(friends[i][1]);
      }
    }
  }
}

module.exports = problem7;
