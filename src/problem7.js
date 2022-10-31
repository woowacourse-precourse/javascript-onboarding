function setFriendPoints(people) {

}

function setVisitorPoints(people, visitors) {
  let newbie = 0;

  for (let i = 0; i < visitors.length; i++) {
    if (people.has(visitors[i]) == false)
      people.set(visitors[i], newbie);
    if (people.get(visitors[i]) >= 0)
      people.set(visitors[i], people.get(visitors[i]) + 1)
  }
}

function makeUsersList(user, friends) {
  let people = new Map();
  let alreadyFriend = -1;
  let newbie = 0;

  people.set(user, -2);
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] != user)
      people.set(friends[i][0], newbie);
    if (friends[i][1] != user)
      people.set(friends[i][1], newbie);
    if (friends[i][0] == user)
      people.set(friends[i][1], alreadyFriend);
    if (friends[i][1] != user)
      people.set(friends[i][0], alreadyFriend);
  }
  return people;
}

function problem7(user, friends, visitors) {
  let people = makePeopleList(friends, visitors);

  setFriendPoints(people);
  setVisitorPoints(people, visitors);
  let answer = getTopFivePeople(people);
  return answer;
}

module.exports = problem7;
