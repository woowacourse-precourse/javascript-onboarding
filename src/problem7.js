/**
 * user의 친구 목록을 반환합니다.
 * @param {string} user 친구 관계를 알고 싶은 사용자 아이디입니다.
 * @param {string[]} friends 친구 관계가 담긴 배열입니다.
 * @returns {string[]} user와 친구인 사람들의 배열입니다.
 */
function getFriends(user, friends) {
  return friends
    .map(([f1, f2]) => {
      if ([f1, f2].includes(user)) {
        return f1 === user ? f2 : f1;
      }
    })
    .filter((f) => f);
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
