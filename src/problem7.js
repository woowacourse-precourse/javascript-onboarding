function getMyFriends(user, friends) {
  const result = [];
  friends.map((friendship) => {
    if (friendship.includes(user)) {
      const leftFriend = friendship[0];
      const rightFriend = friendship[1];
      leftFriend === user ? result.push(rightFriend) : result.push(leftFriend);
    }
  });
  return result;
}

function getMutualFriends(user, friends) {
  let result = [];
  const myFriends = getMyFriends(user, friends);
  myFriends.map((myFriend) => {
    const mutualFriends = getMyFriends(myFriend, friends);

    const myIndex = mutualFriends.indexOf(user);
    mutualFriends.splice(myIndex, 1);

    result = result.concat(mutualFriends);
  });
  return result;
}

function countPoint(uniqueFriend, mutualFriends) {
  let count = 0;
  const mutualFrequencyCount = mutualFriends.filter(
    (friend) => friend === uniqueFriend
  ).length;

  count += mutualFrequencyCount;

  const person = {
    name: uniqueFriend,
    point: count,
  };

  return person;
}

function problem7(user, friends, visitors) {
  let answer = [];

  const mutualFriends = getMutualFriends(user, friends);
  // console.log("mutualFriends", mutualFriends);

  const uniqueMutualFriends = [...new Set(mutualFriends)];
  uniqueMutualFriends.map((uniqueFriend) => {
    const person = countPoint(uniqueFriend, mutualFriends);
    // console.log(person);
    answer.push(person);
  });

  return answer;
}

module.exports = problem7;
