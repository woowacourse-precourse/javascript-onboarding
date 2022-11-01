function sortingPeople(people) {
  let sortedPeople = people.sort((a, b) => {
    if (a[1] == b[1])
      return (a[0].localeCompare(b[0]))
    return (b[1] - a[1])});

  return sortedPeople;
}

function getTopFivePeople(people) {
  let sortedPeople = sortingPeople([...people]);
  let topFive = [];
  
  for (let i = 0; i < 5; i++) {
    if (sortedPeople[i][1] > 0)
      topFive.push(sortedPeople[i][0]);
  }
  return topFive;
}

function giveFriendPoints(people, friends) {
  let currentPoints = 0;

  for (let i = 0; i < friends.length; i++) {
    if (people.get(friends[i][0]) == -1 && people.get(friends[i][1]) >= 0) {
      currentPoints = people.get(friends[i][1]);
      people.set(friends[i][1], currentPoints + 10);
    }
    if (people.get(friends[i][1]) == -1 && people.get(friends[i][0]) >= 0) {
      currentPoints = people.get(friends[i][0]);
      people.set(friends[i][0], currentPoints + 10);
    }
  }
}

function giveVisitorPoints(people, visitors) {
  let newbie = 0;

  for (let i = 0; i < visitors.length; i++) {
    if (people.has(visitors[i]) == false)
      people.set(visitors[i], newbie);
    if (people.get(visitors[i]) >= 0)
      people.set(visitors[i], people.get(visitors[i]) + 1)
  }
}

function makePeopleList(user, friends) {
  let people = new Map();
  let alreadyFriend = -1;
  let newbie = 0;

  for (let i = 0; i < friends.length; i++) {
    if (people.has(friends[i][0]) == false)
      people.set(friends[i][0], newbie);
    if (people.has(friends[i][1]) == false)
      people.set(friends[i][1], newbie);
    if (friends[i][0] == user)
      people.set(friends[i][1], alreadyFriend);
    if (friends[i][1] == user)
      people.set(friends[i][0], alreadyFriend);
  }
  people.set(user, -2);
  return people;
}

function problem7(user, friends, visitors) {
  let people = makePeopleList(user, friends);
  giveFriendPoints(people, friends);
  giveVisitorPoints(people, visitors);
  let answer = getTopFivePeople(people);
  return answer;
}

module.exports = problem7;
