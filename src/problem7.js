function findFriendsOfUser(user, friends) {
  let friendsArray = [];

  friends.map((friend) => {
    if (friend.includes(user)) {
      let newArray = friend.filter((element) => element !== user);
      friendsArray.push(newArray[0]);
    }
  });
  return friendsArray;
}

module.exports = problem7;
