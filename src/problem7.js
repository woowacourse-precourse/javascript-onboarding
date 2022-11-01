function makeFriendList(user, friends) {
  const friendList = [];
  for (relation of friends) {
    if (!relation.includes(user)) continue;
    friendList.push(relation[0] === user ? relation[1] : relation[0]);
  }
  return friendList;
}

function plusScore(friendsToRecommend, name, score) {
  let friendIdx = friendsToRecommend.findIndex(
    (element) => element.name === name
  );

  if (friendIdx === -1) {
    friendsToRecommend.push({ name: name, score: score });
  } else {
    friendsToRecommend[friendIdx].score += score;
  }
}

function selectFriendsToRecommend(user, friends, visitors) {
  let friendsToRecommend = [];
  const friendList = makeFriendList(user, friends);

  for (relation of friends) {
    if (relation.includes(user)) {
      continue;
    }

    if (friendList.includes(relation[0]) && !friendList.includes(relation[1])) {
      plusScore(friendsToRecommend, relation[1], 10);
    }

    if (!friendList.includes(relation[0]) && friendList.includes(relation[1])) {
      plusScore(friendsToRecommend, relation[0], 10);
    }
  }

  for (visitorName of visitors) {
    if (friendList.includes(visitorName)) {
      continue;
    }
    plusScore(friendsToRecommend, visitorName, 1);
  }

  return friendsToRecommend;
}
function processData(array) {
  const result = [];
  array.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;

    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  if (array.length > 5) {
    array = array.slice(0, 5);
  }
  for (friend of array) {
    result.push(friend.name);
  }

  return result;
}
function problem7(user, friends, visitors) {
  let answer = [];

  answer = processData(selectFriendsToRecommend(user, friends, visitors));
  return answer;
}

module.exports = problem7;
