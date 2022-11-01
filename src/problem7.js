//친구 관계 찾기 함수
const findRelation = (user, friends) => {
  let friendRelation = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      friendRelation.push(friend);
    }
  })

  return friendRelation;
}

//친구를 각 key 값으로 선언
const friendToObj = (friendRelation, user) => {
  let friendScore = Object();
  friendRelation.forEach((fr) => {
    const [leftPerson, rightPerson] = fr;
    if (leftPerson === user) {
      friendScore[rightPerson] = 0;
    } else {
      friendScore[leftPerson] = 0;
    }
  });

  return friendScore;
}

//visitors들을 각 key 값으로 추가
const visitorToObj  = (friendScore, visitors, user) => {
  for (let visitor of visitors) {
    if (visitor !== user) {
      friendScore[visitor] = 0;
    }
  }
  return friendScore;
}

function problem7(user, friends, visitors) {
  const friendRelation = findRelation(user, friends);
  const friendScore = friendToObj(friendRelation);
  const friendAndVisitorScore = visitorToObj(friendScore, visitors);

  let answer;
  return answer;
}

module.exports = problem7;
