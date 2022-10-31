function problem7(user, friends, visitors) {
  if (!checkInputValid(user, friends, visitors)) {
    return 'error'
  }

  const userFriendList = makeUserFriendList(user, friends)
  const withoutUserList = makeWithoutUserList(user, friends)
  const bestRecommendFriend = makeBestRecommendFriend(withoutUserList, userFriendList);
  
  // return bestRecommendFriend
}

function makeBestRecommendFriend(withoutUserList, userFriendList) {
  return withoutUserList.map((v) => v.filter((x) => !userFriendList.includes(x))).map(i => i.join(''))
}

function makeUserFriendList(user, friends) {
  const userFriend = []
  friends.forEach((v) => {
    if (v.includes(user)) {
      userFriend.push(v.filter(i => i !== user).join(''));
    }
  })
  return userFriend
}

function makeWithoutUserList(user, friends) {
  const withoutUser = [];
  friends.forEach((v) => {
    if (!v.includes(user))
      withoutUser.push(v)
  })
  return withoutUser
}

function checkInputValid(user, friends, visitors) {
  if (!userLengthInRange(user)) return false;
  if (!friendsLengthInRange(friends)) return false;
  if (!visitorsLengthInRange(visitors)) return false;
  if (!userIdValueCase(user)) return false;
  if (!duplicateFriendship(friends)) return false;
  return true;
}

function userLengthInRange(user) {
  if (user.length < 1 || user.length > 30) return false;
  return true;
}

function friendsLengthInRange(friends) {
  if (friends.length < 1 || friends.length > 10000) return false;
  return true;
}

function visitorsLengthInRange(visitors) {
  if (visitors.length < 0 || visitors > 30) return false;
  return true;
}

function userIdValueCase(user) {
  const idTypeCheck = user.split('').filter(i => i === i.toLowerCase());
  if (user.length === idTypeCheck.length) return true
  return false;
}

function duplicateFriendship(friends) {
  const removeDuplicateArray = [...new Set(friends.join('|').split('|'))].map(v => v.split(',')).length;
  if (friends.length === removeDuplicateArray) return true;
  return false;
}

module.exports = problem7;