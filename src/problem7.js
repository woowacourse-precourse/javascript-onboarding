// 딕셔너리 만들기 지인 저장할것 하나, 점수 저장할 것 하나
const userInfo={};
const userScore={};

function problem7(user, friends, visitors) {

  relationshipLoad(friends)
  
  // 딕셔너리의 values를 돌며 user의 친구와 같은 수만큼 점수 더하기
  const userFriends=userInfo[user]
  sameFriendScoreCount(userFriends)

  // visitors중 친구목록에 없던것은 딕셔너리에 추가,점수 1 올리기
  // 친구목록에 있던건 그냥 점수 1 올리기
  visitScoreCount(visitors)

  // user와 user의 지인 점수 제거
  deleteInfo(user,userFriends)
  
  

  // 추천할 사람 정렬 기능
  let sortTable=[];
  for (let member of Object.keys(userScore)) {
    if (userScore[member]!==0) {
      sortTable.push([member,userScore[member]])
    }
  }
  sortFriends(sortTable)
  let answer=sortTable.map((finalName)=>finalName[0])

  return answer;
}

// friends의 값들을 딕셔너리에 정리_각 친구들을 리스트에 넣기
function relationshipLoad(friendsName) {
  friendsName.forEach((name)=> {
    userInfo[name[0]] ? userInfo[name[0]].add(name[1]) : userInfo[name[0]]=new Set([name[1]])
    userInfo[name[1]] ? userInfo[name[1]].add(name[0]) : userInfo[name[1]]=new Set([name[0]])
  })
}

// 딕셔너리의 values를 돌며 user의 친구와 같은 수만큼 점수 더하기
function sameFriendScoreCount(userFriends) {
  Object.entries(userInfo).forEach((eachlInfo)=> {
    userScore[eachlInfo[0]]=new Set([...eachlInfo[1]].filter(x => userFriends.has(x))).size*10
  })
}

function visitScoreCount(visitors) {
  visitors.forEach((visit) => {
    userScore[visit]=(userScore[visit]|0)+1
  })
}

function deleteInfo(user,userFriends) {
  delete userScore[user]
  for (let userFriend of userFriends) {
    delete userScore[userFriend]
  }
}

function sortFriends(sortTable) {
  sortTable.sort((a,b)=> {
    return (a[1]!==b[1]) ? b[1]-a[1] : (a[0]>b[0] ? 1 : -1)
  })
}


console.log(problem7('mrko',[["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]],["bedi", "bedi", "donut", "bedi", "shakevan"]))
// module.exports = problem7;
