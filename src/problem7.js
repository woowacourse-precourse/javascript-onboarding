function problem7(user, friends, visitors) {
  var answer;

  // 딕셔너리 만들기 지인 저장할것 하나, 점수 저장할 것 하나
  const userInfo={};
  const userScore={}

  // friends의 값들을 딕셔너리에 정리_각 친구들을 리스트에 넣기
  friends.forEach((name) => {
    if (userInfo[name[0]]) {
      userInfo[name[0]].add(name[1])
    } else if (!userInfo[name[0]]){
      userInfo[name[0]]=new Set([name[1]])
    };

    if (userInfo[name[1]]) {
      userInfo[name[1]].add(name[0])
    } else if (!userInfo[name[1]]){
      userInfo[name[1]]=new Set([name[0]])
    }
    
  });

  // user와 user의 지인 제거
  const userFriends=userInfo[user]
  delete userInfo[user]
  delete userScore[user]
  for (let userFriend of userFriends) {
    delete userInfo[userFriend]
    delete userScore[userFriend]
  }
  
  // 딕셔너리의 values를 돌며 user의 친구와 같은 수만큼 점수 더하기
  Object.entries(userInfo).forEach ((totalInfo)=> {
    let person=totalInfo[0], personFriends=totalInfo[1]
    userScore[person]=new Set([...personFriends].filter(x => userFriends.has(x))).size*10
  });
  console.log(userScore)


  // visitors중 친구목록에 없던것은 딕셔너리에 추가,점수 1 올리기
  // 친구목록에 있던건 그냥 점수 1 올리기




  return answer;
}
console.log(problem7('mrko',[["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]],["bedi", "bedi", "donut", "bedi", "shakevan"]))
// module.exports = problem7;
