function problem7(user, friends, visitors) {
  var answer = [];

  let allPeople = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      allPeople.push(friends[i][j]);
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    allPeople.push(visitors[i]);
  }
  allPeople = [...new Set(allPeople)];
  
  let friendsList = {};
  for (let i = 0; i < allPeople.length; i++) {
    friendsList[allPeople[i]] = '';
  }
  for (let i = 0; i < allPeople.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (Object.keys(friendsList)[i] == friends[j][0]) {
        friendsList[allPeople[i]] += friends[j][1];
      }
    }
  }
  for (let i = 0; i < allPeople.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (Object.keys(friendsList)[i] == friends[j][1]) {
        friendsList[allPeople[i]] += friends[j][0];
      }
    }
  }

  let score = {};
  for (let i = 0; i < allPeople.length; i++) {
    score[allPeople[i]] = 0;
  }

  let usersFriends = [];
  for (let i = 0; i < allPeople.length; i++) {
    if (friendsList[allPeople[i]].includes(user)) {
      usersFriends.push(Object.keys(friendsList)[i]);
    }
  }
  for (let i = 0; i < allPeople.length; i++) {
    for (let j = 0; j < usersFriends.length; j++) {
      if (friendsList[usersFriends[j]].includes(allPeople[i])) {
        score[allPeople[i]] += 10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    score[visitors[i]]++;
  }
  
  delete score[user];

  for (let i = 0; i < usersFriends.length; i++) {
    delete score[usersFriends[i]];
  }

  let sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

  for(let element of sorted) {
	answer.push(element[0])
  }
  
  return answer;
}
console.log(problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]));
module.exports = problem7;
