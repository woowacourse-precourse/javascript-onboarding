function findUserFriends(friends) {
  let userFriends = [];

  friends.forEach((friend) => {
    if (friend[0] === user) {
      userFriends.push(friend[1]);
    }
    if (friend[1] === user) {
      userFriends.push(friend[0]);
    }
  });

  return userFriends;
}

function findNotUserfriends(friends) {
  const userFriends = findUserFriends(friends);
  let notUserFriends = [];

  friends.forEach((friendsArr) =>
    friendsArr.forEach((friend) => {
      if (
        userFriends.includes(friend) === false &&
        friend !== user &&
        notUserFriends.includes(friend) === false
      ) {
        notUserFriends.push(friend);
      }
    })
  );

  return notUserFriends;
}
