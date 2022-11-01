function problem7(user, friends, visitors) {
  var answer;
  return answer;
  let friendName = []; //이름만 담는 리스트 friendName
  friends.forEach(function (item) {
    friendName.push(item[0]);
    friendName.push(item[1]);
  });
  friendName = friendName.filter(
    (item, pos) => friendName.indexOf(item) === pos
  ); //friendName 에 중복제거
}

module.exports = problem7;
