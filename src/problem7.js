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

const dictToArray = (scores) => {
  const newArr = new Array;
  for(let key in scores) {
    newArr.push([scores[key], key]);
  }
  return newArr;
}

const arrayFilter = (element, user, friendsDictObj) => {
  if(element[1] === user) return false;
  if(Object.keys(friendsDictObj).includes(user)
  &&friendsDictObj[user].includes(element[1])) return false;
  if(element[0] === 0) return false;
  return true;
}

const makeScoreArray = (user, friendsDictObj, scores) => {
  const newArr = dictToArray(scores);
  const filteredArr = newArr.filter((element) => {
    return arrayFilter(element, user, friendsDictObj);
  })
  return filteredArr;
}

const compareName = (nameA, nameB) => {
  if(nameA < nameB) return -1;
  else return 1;
}

const sortFunction = (a, b) => {
  if(a[0] == b[0]) return compareName(a[1], b[1]);
  else return b[0] - a[0];
}

const sortScoreArray = (filteredArr) => {
  const sortedArr = filteredArr.sort(sortFunction);
  return sortedArr;
}

const arrayLengthLimit = (sortedArr) => {
  const arrLength = Math.min(sortedArr.length, 5);
  const answer = new Array;
  for(let i=0; i<arrLength; i++) {
    answer.push(sortedArr[i][1]);
  }
  return answer;
}

function problem7(user, friends, visitors) {
  const friendsDictObj = makeFriendsDictObj(friends);
  const scores = makeScoreDict(friendsDictObj, visitors); 
  getFriendsScore(friendsDictObj, scores, user);
  getVisitorScore(visitors, scores);
  const filteredArr = makeScoreArray(user, friendsDictObj, scores);
  const sortedArr = sortScoreArray(filteredArr);
  const answer = arrayLengthLimit(sortedArr);
  return answer;
}

module.exports = problem7;
console.log(problem7('hello',
[
  ['andole', 'jun'],
  ['andole', 'bedi'],
  ['jun', 'shakevan'],
  ['jun', 'kane'],
  ['jun', 'sam'],
  ['bedi', 'shakevan'],
  ['bedi', 'anne'],
  ['bedi', 'sam'],
  ['anne', 'mrko'],
],
['donut', 'anne', 'mrko', 'mrko', 'sam'],))