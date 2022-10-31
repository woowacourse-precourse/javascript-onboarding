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

function deleteDuplicatesVisitorArray(friends, visitors) {
  let visitorsArray = [];
  const userFriends = findUserFriends(friends);

  visitors.forEach((visitor) => {
    if (
      visitorsArray.includes(visitor) === false &&
      userFriends.includes(visitor) === false
    ) {
      visitorsArray.push(visitor);
    }
  });

  return visitorsArray;
}

function makeCombinedArr(friends, visitors) {
  const notUserFriends = findNotUserfriends(friends);
  const visitorsArray = deleteDuplicatesVisitorArray(friends, visitors);
  let combindedArr = [...notUserFriends, ...visitorsArray];

  return combindedArr;
}
