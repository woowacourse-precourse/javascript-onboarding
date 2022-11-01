function problem7(user, friends, visitors) {
  let answer = [];
  const friendsDict = {};
  const score = {};

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] in friendsDict) {
      friendsDict[friends[i][0]].push(friends[i][1]);
    } else {
      friendsDict[friends[i][0]] = [friends[i][1]];
    }
    if (friends[i][1] in friendsDict) {
      friendsDict[friends[i][1]].push(friends[i][0]);
    } else {
      friendsDict[friends[i][1]] = [friends[i][0]];
    }
  }

  let friendsOfFriends = [];

  if (user in friendsDict) {
    let userFriends = friendsDict[user];
    for (let i = 0; i < userFriends.length; i++) {
      friendsOfFriends = [...friendsOfFriends, ...friendsDict[userFriends[i]]];
    }
  }

  console.log(friendsOfFriends);

  for (const friend of friendsOfFriends) {
    if (friend !== user && !friendsDict[user]?.includes(friend)) {
      if (friend in score) {
        score[friend] += 10;
      } else {
        score[friend] = 10;
      }
    }
  }

  for (const friend of visitors) {
    if (!friendsDict[user]?.includes(friend)) {
      if (friend in score) {
        score[friend] += 1;
      } else {
        score[friend] = 1;
      }
    }
  }

  let sortScore = [];
  for (const person in score) {
    sortScore.push({
      name: person,
      score: score[person],
    });
  }

  console.log(sortScore);

  sortScore.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  console.log(sortScore);

  if (sortScore.length > 5) sortScore = sortScore.slice(0, 5);

  for (const person of sortScore) {
    answer.push(person["name"]);
  }

  return answer;
}

problem7(
  "Jan",
  [
    ["Lamont", "Christa"],
    ["Mara", "Mara"],
    ["Kali", "Adonis"],
    ["Urban", "Lamont"],
    ["Jesus", "Austyn"],
    ["Rosalia", "Alyce"],
    ["Jan", "Rosalia"],
    ["Jayne", "Jan"],
    ["Jan", "Adonis"],
    ["Josh", "Jan"],
  ],
  ["Adonis", "Cecil", "Adonis", "Eliza", "Josh", "Urban"]
);

module.exports = problem7;
