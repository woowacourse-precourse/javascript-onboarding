// Calculation of visitors score.
// Simply add up the 1 for each users.
// However, user that is already in friends with the given user will be deleted later.
function visitorScore(visitors) {
  const visitorObj = {};
  for (const visitor of visitors) {
    visitorObj[visitor] = visitors.filter((el) => el === visitor).length;
  }
  return visitorObj;
}

// Calculate mutual friends score.
function friendsScore(user, friends) {
  // Initialization of all friends
  const allFriends = friends.reduce((acc, cur) => acc.concat(cur));

  // Check the friends that are already in friendship with user
  let alreadyFriends = [];
  for (const [first, second] of friends) {
    if (second === user) {
      alreadyFriends.push(first);
    } else if (first === user) {
      alreadyFriends.push(second);
    }
  }

  // Check the possible friends that are NOT in friendship with user yet
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

  // Add up all possible friends that are mutual relationship with user * 10
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

  // Delete the friends that are already in friendship with user
  for (const [first, second] of friends) {
    if (second === user) {
      delete visitorAcc[first];
    } else if (first === user) {
      delete visitorAcc[second];
    }
  }

  // Sorting
  const sum = { ...mutualAcc, ...visitorAcc };
  const answer = Object.entries(sum)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  return Object.keys(answer);
}

module.exports = problem7;
