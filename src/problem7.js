function problem7(user, friends, visitors) {
  var answer;
  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
      let findUserFriend = friends[i].indexOf(user);
      if (findUserFriend > 0) userFriend.push(friends[i][1 - findUserFriend]);
  }
  let acquaintanceArr = [];
  for (let i = 0; i < userFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][i] != user) {
        acquaintanceArr.push(friends[j][1 - i]);
      }
    }
  }
  
  let acquaintance = acquaintanceArr
  .filter(x => !userFriend.includes(x))
  .filter(x => x !== user);

  let visitant = visitors
  .filter(x => !userFriend.includes(x));

  let UserwithScore = giveScore(acquaintance, 10);
  
  let totalScoreArr = UserwithScore.concat(giveScore(visitant, 1));
  let finalScoreObj = sumScore(totalScoreArr);
  
  console.log(finalScoreObj);

  //정렬
  let scoreSort = finalScoreObj.sort((a, b) => {
    if (a.name > b.name && a.score == b.score) return 1;
    if (a.name < b.name && a.score == b.score) return -1;

  });
  
  let recommend = [];
  for (let i = 0; i < scoreSort.length; i++) {
    recommend.push(scoreSort[i].name);
  }


  answer = recommend;
  return answer;

}

function giveScore(arr, score) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    obj.name = arr[i];
    obj.score = score;
    result.unshift(obj);
    if (result.length > 1) {
      for (let j = 1; j < result.length; j++) {
        if (obj.name == result[j].name) {
          result[j].score += score;
          result.shift();
        } 
      }
    }
    
  }
  return result;
}

function sumScore(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name == arr[j].name) {
        arr[i].score += arr[j].score;
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

module.exports = problem7;

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);