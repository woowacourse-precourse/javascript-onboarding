const judgeFriend = (me, pair) => (pair[0] === me ? pair[1] : pair[0]);

const getFriends = (me, friends) => {
  return friends.reduce((acc, pair) => {
    if (pair.includes(me)) return [...acc, judgeFriend(me, pair)];
    return acc;
  }, []);
};

const getMyFriendsFriends = (myFriends, friendMap) => {
  return myFriends.reduce(
    (acc, myFriend) => [...acc, getFriends(myFriend, friendMap)],
    []
  );
};

const getAcquaintance = (me, [myFriends, friendMap]) => {
  const myFriendsFriends = getMyFriendsFriends(myFriends, friendMap);
  return myFriendsFriends.map((friends) =>
    friends.filter((friend) => friend !== me)
  );
};

const caculateScore = (acquaintance, visitors) => {
  
};

function problem7(user, friends, visitors) {
  const myFriends = getFriends(user, friends);
  const acquaintance = getAcquaintance(user, [myFriends, friends]);
  console.log(acquaintance);
  return 0;
}

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);
module.exports = problem7;
