function problem7(user, friends, visitors) {
  var answer = [];
  const initPoint = parseInt(0);
  let list = [];
  let recommendList = [];
  let tempVisitor = visitors;

  friends.forEach((pair) => {
    if (pair.includes(user)) {
      list.push(pair[1 - pair.indexOf(user)]);
    }
  });

  friends.forEach((pair) => {
    for (let element of list) {
      if (pair.includes(element)) {
        recommendList.push(pair[1 - pair.indexOf(element)]);
      }
    }
  });

  recommendList = recommendList.filter((name) => name !== user);

  recommendList = recommendList.filter((name) => name !== user);
  for (let i = 0; i < list.length; i++) {
    recommendList = recommendList.filter((a) => a !== list[i]);
  }
  
  let countedNames = recommendList.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  for (let friend of list) {
    tempVisitor = tempVisitor.filter((name) => name !== friend);
  }

  let countedVisitor = tempVisitor.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  let countedArray = Object.keys(countedNames);
  let visitorsArray = Object.keys(countedVisitor);

  let finalList = [...countedArray, ...visitorsArray];

  finalList = finalList.filter((element, index) => {
    return finalList.indexOf(element) === index;
  });

  for (let i = 0; i < finalList.length; i++) {
    finalList[i] = [finalList[i], initPoint];
  }

  for (let nameInCounted in countedNames) {
    for (let nameInList of finalList) {
      if (nameInCounted === nameInList[0]) {
        nameInList[1] += countedNames[nameInCounted] * 10;
      }
    }
  }

  for (let visitorInCounted in countedVisitor) {
    for (let nameInList of finalList) {
      if (visitorInCounted === nameInList[0]) {
        nameInList[1] += countedVisitor[visitorInCounted];
      }
    }
  }

  finalList.sort((a, b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
  });

  finalList.sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < 5; i++) {
    if (i === finalList.length) {
      break;
    }
    answer.push(finalList[i][0]);
  }

  return answer;
}

module.exports = problem7;
