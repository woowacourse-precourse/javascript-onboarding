function problem7(user, friends, visitors) {
  var answer;
  const user_friends = findFriends(user, friends);
  const all_people = allPeople(user, friends, visitors);
  const not_user_friends = all_people.filter((x) => !user_friends.includes(x));

  let scoreBoard = {};
  for (person of not_user_friends) {
    scoreBoard[person] = 0;
  }

  for (const user_friend of user_friends) {
    // user의 친구의 친구목록을 찾은 뒤 user의 친구가 아닌 사람의 점수를 하나씩 계산한다.
    const user_friend_relation = findFriends(user_friend, friends);

    for (person of not_user_friends)
      if (user_friend_relation.includes(person)) scoreBoard[person] += 10;
  }

  for (const visitor of visitors) {
    if (not_user_friends.includes(visitor)) scoreBoard[visitor] += 1;
  }
  return answer;
}

function findFriends(user, friends) {
  // user의 친구 찾기.
  const user_friends = new Set();

  friends.map((relation) => {
    const [relation1, relation2] = relation;
    if (relation2 === user) user_friends.add(relation1);
    else if (relation1 === user) user_friends.add(relation2);
  });
  return [...user_friends];
}

function allPeople(user, friends, visitors) {
  const all_people = new Set();
  const visitors_set = new Set(visitors);

  friends.map((relation) => {
    const [person1, person2] = relation;
    all_people.add(person1);
    all_people.add(person2);
  });

  for (const visitor of [...visitors_set]) all_people.add(visitor);

  if (all_people.has(user)) all_people.delete(user);

  return [...all_people];
}

module.exports = problem7;
