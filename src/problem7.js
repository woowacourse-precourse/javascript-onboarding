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

function countVisitPoint(uniqueVisit, visitors) {
  let count = 0;
  const visitFrequencyCount = visitors.filter(
    (visitor) => visitor === uniqueVisit
  ).length;

  count += visitFrequencyCount;

  const person = {
    name: uniqueVisit,
    point: count,
  };

  return person;
}

function problem7(user, friends, visitors) {
  let answer = [];

  const mutualFriends = getMutualFriends(user, friends);

  const uniqueMutualFriends = [...new Set(mutualFriends)];
  uniqueMutualFriends.map((uniqueFriend) => {
    const person = countPoint(uniqueFriend, mutualFriends);
    answer.push(person);

    const uniqueVisitors = [...new Set(visitors)];

    uniqueVisitors.map((uniqueVisit) => {
      const person = countVisitPoint(uniqueVisit, visitors);

      // answer 중 이미 중복된 대상이 있는지
      for (let i = 0; i < answer.length; i++) {
        const oldSchool = answer[i];
        if (uniqueVisitors.includes(oldSchool.name)) {
          oldSchool.point += person.point;
        } else {
          answer.push(person);
        }
      }
    });
  });

  return answer;
}

module.exports = problem7;
