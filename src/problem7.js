const putDictObj = (dictKey, dictValue, dictObj) => {
  if(dictObj[dictKey] === undefined) dictObj[dictKey] = new Array(dictValue);
  else dictObj[dictKey].push(dictValue);
}

const makeFriendsDictObj = (friends) => {
  let newDictObj = {}
  friends.forEach(element => {
    putDictObj(element[0], element[1], newDictObj);
    putDictObj(element[1], element[0], newDictObj);
  })
  return newDictObj;
}

const makeScoreDictByFriends = (newScoreDict, friendsDictObj) => {
  for(let key in friendsDictObj) newScoreDict[key] = 0;
  return newScoreDict;
}

const makeScoreDictByVisitors = (newScoreDict, visitors) => {
  for(let visitor of visitors) newScoreDict[visitor] = 0;
  return newScoreDict;
}

const makeScoreDict = (friendsDictObj, visitors) => {
  const newScoreDict = {}
  makeScoreDictByFriends(newScoreDict, friendsDictObj);
  makeScoreDictByVisitors(newScoreDict, visitors);
  return newScoreDict;
}

const isFriend = (friendsDictObj, user, value) => {
  if(friendsDictObj[value].includes(user)) return 10;
  return 0;
}

const getScore = (friendsDictObj, scores, user, key) => {
  for(let value of friendsDictObj[key]) {
    scores[key] += isFriend(friendsDictObj, user, value)
  }
}

const getFriendsScore = (friendsDictObj, scores, user) => {
  for(let key in friendsDictObj) {
    getScore(friendsDictObj, scores, user, key)
  }
}

const getVisitorScore = (visitors, scores) => {
  for(let visitor of visitors) {
    scores[visitor] += 1;
  }
}

function problem7(user, friends, visitors) {
  const friendsDictObj = makeFriendsDictObj(friends);
  const scores = makeScoreDict(friendsDictObj, visitors); 
  getFriendsScore(friendsDictObj, scores, user);
  getVisitorScore(visitors, scores);
  return scores;
}

module.exports = problem7;
console.log(problem7("mrko", [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]))
