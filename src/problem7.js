function problem7(user, friends, visitors) {
  var answer;
  let map = new Map();
  let mapIndex = 0;
  let userList = [];
  mapIndex = setMap(map, mapIndex, user, friends, visitors, userList);
  let relation = new Array(mapIndex);
  let userScores = new Array(mapIndex);
  setRelation(relation, friends, map);
  setUserScores(userScores, relation, visitors, userList, map);
  console.log(relation);
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

function setUserScores(userScores, relation, visitors, userList, map){
  initUserScores(userScores, userList);
  addFriendScore(userScores, relation, map);
  for(let i = 0; i < visitors.length; i++){
    let userIndex = map.get(visitors[i]);
    userScores[userIndex].score += 1;
  }
}

function initUserScores(userScores, userList){
  for(let i = 0; i < userList.length; i++){
    userScores[i] = {
      name: "",
      score: 0,
    };
    userScores[i].name = userList[i];
  }
}

function addFriendScore(userScores, relation, map){
  for(let i = 0; i < relation[0].length; i++){
    let friendIndex = map.get(relation[0][i]);
    for(let j = 0; j < relation[friendIndex].length; j++){
      console.log("Add score user is ", relation[friendIndex][j]);
      let finalIndex = map.get(relation[friendIndex][j]);
      userScores[finalIndex].score += 10;
    }
  }
}

module.exports = problem7;
