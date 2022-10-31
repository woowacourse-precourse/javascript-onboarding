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

function checkSoreOfFriendsOfFriends(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let map = new Map();

  combinedArr.forEach((friend) => {
    let i = 0;
    let count = 10;
    for (; i < friends.length; i++) {
      if (friends[i].includes(friend)) {
        map.set(friend, count);
        count = count + 10;
      }
    }
  });

  return map;
}

function checkSoreOfVisitor(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let map = checkSoreOfFriendsOfFriends(friends, visitors);

  combinedArr.forEach((friend) => {
    let i = 0;
    let count = 1;

    for (; i < visitors.length; i++) {
      if (visitors[i] === friend) {
        map.set(friend, count);
        count = count + 1;
      }
    }
  });

  return map;
}

function DuplicatedArrayToDesending(array) {
  return array.sort((a, b) => b[1] - a[1]);
}
