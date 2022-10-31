let hash = {};

function problem7(user, friends, visitors) {
  var answer;

  arrangeFriends();

  return answer;

  // 유저목록 정리
  function arrangeFriends() {
    // friends 배열
    friends.forEach((friend) => {
      friend.forEach((person) => {
        if (person !== user && hash[person] === undefined) {
          hash[person] = 0;
        }
      });
    });
    // visitors 배열
    visitors.forEach((visitors) => {
      if (hash[visitors] === undefined) {
        hash[visitors] = 0;
      }
    });
  }
}

module.exports = problem7;
