function problem7(user, friends, visitors) {
  const usersList = getListOfUserAndFriends(friends);
}

function getListOfUserAndFriends(userFriends) {
  let member = new Array().fill(0);
  let scoreTable = [member];

  userFriends.forEach((twoFriends) => {
    twoFriends.forEach((friend) => {
      member = {};

      let declaredMember = false;
      scoreTable.forEach((scoreList) => {
        if (Object.values(scoreList).includes(friend)) {
          declaredMember = true;
        }
      });

      if (declaredMember === false) {
        member.name = friend;
        member.score = 0;
        scoreTable.push(member);
      }
    });
  });

  scoreTable.shift();

  return scoreTable;
}

module.exports = problem7;

andole = 10 + 10;
jun = 10 + 10;
donut = 1;
shakevan = 1;
bedi = 1 + 1 + 1;
