function problem7(user, friends, visitors) {
  var answer;
  let map = new Map();
  let mapIndex = 0;
  setMap(map, mapIndex, user, friends, visitors);
  return answer;
}

function setMap(map, mapIndex, user, friends, visitors){
  map.set(user);
  mapIndex++;
  setMapFriends(map, mapIndex, friends);
  setMapVisitors(map, mapIndex, visitors);
}

module.exports = problem7;
