function problem7(user, friends, visitors) {
  let answer;
  let friendCopy = [];
  let algorithmArr = [];

  for (let index = 0; index < friends.length; index++) {
    friendCopy.push(friends[index][0]);

    let overlapIdx = algorithmArr.indexOf(friends[index][1]);
    if (overlapIdx != -1 && friends[index][1].length === algorithmArr[overlapIdx][0]) {
      algorithmArr[overlapIdx][1] += 10;
      continue;
    }
    algorithmArr.push([friends[index][1], 10]);
  }

  for (index = 0; index < visitors.length; index++) {
    let overlapIdx = algorithmArr.indexOf(visitors[index]);
    if (overlapIdx != -1 && visitors[index].length === algorithmArr[overlapIdx][0]) {
      algorithmArr[overlapIdx][1] += 1;
      continue;
    }
    algorithmArr.push([visitors[index], 1]);
  }

  algorithmArr.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  for(index=0;index<5; index++){
    if(algorithmArr[index]){
      break;
    }
    answer.push(algorithmArr[index][0]);
  }
  return answer.sort();
}

module.exports = problem7;