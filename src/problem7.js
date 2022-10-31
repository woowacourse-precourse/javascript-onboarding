function problem7(user, friends, visitors) {

  
  if (!checkInputValid(user, friends, visitors)) {
    return 'error'
  }
  // return 'success';

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
