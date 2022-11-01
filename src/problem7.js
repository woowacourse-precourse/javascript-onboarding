// 사람을 중복없이 한번에 모아주는 함수(user, friend 포함)
function people(friends, visitors) {
  const people = [];
  people.push(...visitors);
  friends.forEach((element) => people.push(element[0], element[1]));
  const setPeople = new Set(people);

  return setPeople;
}

// user와 친구인 사람을 찾는 함수
function findFriend(user, friends) {
  let userFriend = [];
  friends.forEach((element) => {
    if (element.includes(user)) {
      if (element[0] === user) {
        userFriend.push(element[1]);
      } else if (element[1] === user) {
        userFriend.push(element[0]);
      }
    }
  });
  return userFriend;
}

function problem7(user, friends, visitors) {
  let answer;
  return answer;
}

module.exports = problem7;
