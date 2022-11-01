function problem7(user, friends, visitors) {
  if (!inputExecption(user, friends, visitors)) return false;
  var answer;
  let userFriend = [];
  let acquaintanceArr = [];

  for (let i = 0; i < friends.length; i++) {
      let findUserFriend = friends[i].indexOf(user);
      if (findUserFriend > 0) userFriend.push(friends[i][1 - findUserFriend]);
  }
  
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
  console.log(answer)
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

function inputExecption(user, arr1, arr2) {
  let nickCheck = /^[a-z]*$/;
  let inputCheck = true;
  if (user.length < 1 || user.length > 30) inputCheck = false;
  if (!nickCheck.test(user)) inputCheck = false;
  else if (arr1.length < 1 || arr1.length > 10000) inputCheck = false;
  else if (arr2.length < 1 || arr2.length > 10000) inputCheck = false;
  else if (!user.toLowerCase === user) inputCheck = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 3) inputCheck = false;
    if (arr1[i].length < 1 || arr1[i].length > 30 ) inputCheck = false;
    for (let j = 0; j < 2; j++) {
      if (!nickCheck.test(arr1[i][j])) inputCheck = false;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!nickCheck.test(arr2[i])) inputCheck = false;
  }

  return inputCheck;
}

module.exports = problem7;
