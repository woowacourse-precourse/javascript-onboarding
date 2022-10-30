function problem7(user, friends, visitors) {
  var answer;
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

  recommendList = recommendList.filter(name => name !== user);

  let countedNames = recommendList.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

 for(let friend of list) {
   tempVisitor = tempVisitor.filter(name => name !== friend);
 }
  

  return answer;
}

module.exports = problem7;
