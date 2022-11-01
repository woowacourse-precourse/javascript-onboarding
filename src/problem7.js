/** 친구 관계를 나타내는 객체를 생성하는 기능 **/
function makeFriendsList(friends) {
  let friendsObject = {};

  for (let item of friends) {
    for (let i = 0; i < 2; i++) {
      if (item[i] in friendsObject) friendsObject[item[i]].push(item[1 - i]);
      else friendsObject[item[i]] = [item[1 - i]];
    }
  }
  return friendsObject;
}

function problem7(user, friends, visitors) {
  var answer = [];
  return answer;
}

module.exports = problem7;
