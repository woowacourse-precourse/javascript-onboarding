function problem7(user, friends, visitors) {
  var answer;
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

  return answer;
}

module.exports = problem7;
