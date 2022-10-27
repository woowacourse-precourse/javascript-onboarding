function problem7(user, friends, visitors) {
  var answer;
  let map = new Map();
  let mapIndex = 0;
  let userList = [];
  mapIndex = setMap(map, mapIndex, user, friends, visitors, userList);
  let relation = new Array(mapIndex+1);
  let userScores = new Array(mapIndex+1);
  setRelation(relation, friends, map);
  setUserScores(userScores, relation, visitors, userList);
  console.log(userScores);
  return answer;
}

function setMap(map, mapIndex, user, friends, visitors, userList){
  map.set(user, mapIndex);
  userList.push(user);
  mapIndex++;
  mapIndex = setMapFriends(map, mapIndex, friends, userList);
  mapIndex = setMapVisitors(map, mapIndex, visitors, userList);
  return mapIndex;
}

function setMapFriends(map, mapIndex, friends, userList){
  for(let i = 0; i < friends.length; i++){
    for(let j = 0; j < 2; j++){
      if(!map.has(friends[i][j])){
        map.set(friends[i][j], mapIndex);
        userList.push(friends[i][j]);
        mapIndex++;
      }
    }
  }
  return mapIndex;
}

function setMapVisitors(map, mapIndex, visitors, userList){
  for(let i = 0; i < visitors.length; i++){
    if(!map.has(visitors[i])){
      map.set(visitors[i], mapIndex);
      userList.push(visitors[i]);
      mapIndex++;
    }
  }
  return mapIndex;
}

function setRelation(relation, friends, map){
  for(let i = 0; i < relation.length; i++){
    relation[i] = new Array();
  }
  for(let i = 0; i < friends.length; i++){
    let leftNode = friends[i][0];
    let rightNode = friends[i][1];
    relation[map.get(leftNode)].push(rightNode);
    relation[map.get(rightNode)].push(leftNode);
  }
}

function setUserScores(userScores, relation, visitors, userList){
  initUserScores(userScores, userList);
}

function initUserScores(userScores, userList){
  for(let i = 0; i < userList.length; i++){
    console.log(userList[i]);
    userScores[i] = {
      name: "",
      score: 0,
    };
    userScores[i].name = userList[i];
  }
}

module.exports = problem7;
