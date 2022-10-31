function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
const userArr = [];
const friendsArr = [];
const visitorsArr = [];
const ten = [];
const one = [];
const zero = [];

function sns(user, friends, visitors){
  userArr.push(user);
  function setPeople(people,peopleArr) {
    for(i = 0; i < people.length; i++) {
      peopleArr.push(people[i]);
    }
  }
  const setFriends = new setPeople(friends,friendsArr);
  const setVisitors = new setPeople(visitors,visitorsArr);
  for(i = 0; i < friends.length; i++){
    if(friendsArr[i][1] !== user){
      ten.push(friendsArr[i][1]);
    } else if(friendsArr[i][1] === user){
      zero.push(friendsArr[i][0]);
    }
  }
}
module.exports = problem7;
