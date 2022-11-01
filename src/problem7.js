function visitorScore(visitors) {
  const visitorObj = {};
  for (const visitor of visitors) {
    visitorObj[visitor] = visitors.filter((el) => el === visitor).length;
  }
  return visitorObj;
}

function friendsScore(user, friends) {
  const allFriends = friends.reduce((acc, cur) => acc.concat(cur));

  let alreadyFriends = [];
  for (const [first, second] of friends) {
    if (second === user) {
      alreadyFriends.push(first);
    } else if (first === user) {
      alreadyFriends.push(second);
    }
  }

  const set2 = new Set();
  for (const [first, second] of friends) {
    for (const alreadyFriend of alreadyFriends) {
      if (first === alreadyFriend) {
        set2.add(second);
        set2.delete(user);
      } else if (second === alreadyFriend) {
        set2.add(first);
        set2.delete(user);
      }
    }
  }
  let possibleFriends = [...set2];

  const friendsObj = {};
  for (const possibleFriend of possibleFriends) {
    friendsObj[possibleFriend] =
      allFriends.filter((el) => el === possibleFriend).length * 10;
  }

  return friendsObj;
}

function problem7(user, friends, visitors) {
  const mutualAcc = friendsScore(user, friends);
  let visitorAcc = visitorScore(visitors);

  for (const [first, second] of friends) {
    if (second === user) {
      delete visitorAcc[first];
    } else if (first === user) {
      delete visitorAcc[second];
    }
  }

  const sum = { ...mutualAcc, ...visitorAcc };
  const answer = Object.entries(sum)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  return Object.keys(answer);
}

module.exports = problem7;
