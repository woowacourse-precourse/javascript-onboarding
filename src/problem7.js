function problem7(user, friends, visitors) {
  // user와 친구인 사용자 아이디 배열
  const alreadyFriend = [];

  friendCheck(user, friends, alreadyFriend);
}

function alreadyFriend(user, friends, alreadyFriend) {
  // friends 원소 0또는 1자리에 원소가 user와 일치하면 1또는 0자리는 user와 친구인 사용자의 아이디 일 것이다.
  friends.forEach((element) => {
    if (element[0] === user) {
      alreadyFriend.push(element[1]);
    } else if (element[1] === user) {
      alreadyFriend.push(element[0]);
    }
  });
}

module.exports = problem7;
