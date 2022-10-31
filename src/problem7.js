function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
const userArr = [];
const friendsArr = [];
const visitorsArr = [];

function sns(user, friends, visitors){
  userArr.push(user);
  function setPeople(people,peopleArr) {
    for(i = 0; i < people.length; i++) {
      peopleArr.push(people[i]);
    }
  }
  const setFriends = new setPeople(friends,friendsArr);
  const setVisitors = new setPeople(visitors,visitorsArr);
}
module.exports = problem7;
