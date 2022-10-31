function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

// 친구관계를 담은 2차원배열과, 유저닉네임을 넘기면 유저의 친구목록을 배열로 반환
function findUsersFriend(friends, user) {
  const result = [];
  friends.forEach((relation) => {
    const IDX_USER = relation.indexOf(user);
    if (IDX_USER !== -1) {
      result.push(relation[1 - IDX_USER]);
    }
  });
  return result;
}

module.exports = problem7;
