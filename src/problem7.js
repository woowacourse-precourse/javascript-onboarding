function friendOfFriend(user, friends, set) {
  friends = friends.filter((item) => {
    const userFriend = item.filter((v) => v !== user);
    if (userFriend.length === 1) {
      set.add(userFriend[0]);
    } else return item;
  });
  return { friends, set };
}

function friendAddTen(friends, set, obj) {
  friends.forEach((item) => {
    const [A, B] = item;
    if (set.has(A)) {
      if (!obj[B]) obj[B] = 10;
      else obj[B] += 10;
    }
    if (set.has(B)) {
      if (!obj[A]) obj[A] = 10;
      else obj[A] += 10;
    }
  });
  return obj;
}
function friendVisitCheck(visitors, set, obj) {
  for (value of visitors) {
    if (set.has(value)) continue;
    if (!obj[value]) obj[value] = 1;
    else obj[value] += 1;
  }
  return obj;
}

function keyValueObject(answer, obj) {
  let objKeys = Object.keys(obj);
  let objScores = Object.values(obj);
  answer = objKeys.reduce((acc, _, index) => {
    acc.push({ key: objKeys[index], score: objScores[index] });
    return acc;
  }, []);
  return answer;
}
function answerScoreSort(answer) {
  answer.sort(function (a, b) {
    if (a.score === b.score) {
      if (a.key > b.key) return 1;
      else if (b.key > a.key) return -1;
      else return 0;
    }
    return b.score - a.score;
  });
  return answer;
}
function answerId(answer) {
  answer = answer.map((item) => {
    return item.key;
  });
  if (answer.length > 5) {
    answer = answer.filter((item, index) => {
      if (index > 4) return false;
      else return item;
    });
  }
  return answer;
}
function objectReturnFunc(friends, set, obj, visitors) {
  obj = friendAddTen(friends, set, obj);
  obj = friendVisitCheck(visitors, set, obj);
  return obj;
}
function answerReturnFunc(answer, obj) {
  answer = keyValueObject(answer, obj);
  answer = answerScoreSort(answer);
  answer = answerId(answer);
  return answer;
}
function problem7(user, friends, visitors) {
  let answer = [];
  let obj = {};
  let set = new Set();
  let firstData = friendOfFriend(user, friends, set);
  set = firstData.set;
  friends = firstData.friends;
  obj = objectReturnFunc(friends, set, obj, visitors);
  answer = answerReturnFunc(answer, obj);
  return answer;
}

module.exports = problem7;
