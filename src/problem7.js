function problem7(user, friends, visitors) {
  const  mergeArray = (array) => array.reduce(function (acc, cur) {return acc.concat(cur);});
  const memberSet = new Set(friendsArray.concat(visitors));
  const memberList = [...memberSet];

  const userFriends = friends
  .filter((friend) => friend[1] === user)
  .map((friend) => friend[0]);

  const friendScoreBoard = memberList
  .filter((member) => userFriends.indexOf(member) === -1)
  .map((member) => [member, 0]);

  const  relavantUser = [];
  for(const member of userFriends){
    for(i=0; i<friends.length; i++){   
      if (friends[i].indexOf(member) > -1){
        relavantUser.push(String(friends[i].filter((element) => element !== member && element !== user)))
      }
    }
  }

  for (const item of relavantUser){
    for(i=0; i<friendScoreBoard.length; i++){
      if(friendScoreBoard[i].indexOf(item) > -1){
        friendScoreBoard[i][1] = friendScoreBoard[i][1] + 10
      }
    }
  }

  const visitorList = visitors.filter((element) => userFriends.indexOf(element) === -1)
  for (const item of visitorList){
    for (i = 0; i < friendScoreBoard.length; i++){
      if(friendScoreBoard[i].indexOf(item) > -1){
        friendScoreBoard[i][1] = friendScoreBoard[i][1] + 1
      }
    }
  }

  function filterScore (array, number) {return array.filter(innerArray => innerArray[1] !== number);}
  const filteredScore = filterScore(friendScoreBoard, 0);

module.exports = problem7;

//problem7 기능목록
//[x]모든 사용자의 닉네임을 저장한 배열을 만든다.
//  [x]이차원배열 friends를 일차원으로 변환시킨다.
//  [x]일차원배열에서 user를 삭제한 후 vistor와 결합, 중복을 삭제한다.
//[x]userFirends 배열에 user와 이미 친구인 사용자를 저장한다.
//[x]친구 추천 점수판을 구현한다.
//  [x]이미 친구인 사용자를 제외한 사용자들을 [닉네임, 점수] 순의 배열로 정리한다.
//[]사용자별 친구 추천 점수를 계산한다. 
//  [x]user와 공통의 친구를 가진 케이스들을 relavantUser에 저장한다
//  [x]relavantUser에 저장된 건수별로 해당 사용자에게 10점을 추가한다.
//  [x]visitors 배열에서 유저와 이미 친구인 사용자를 삭제한다.
//  [x]visitorList에서 출현하는 횟수만큼 해당 사용자에게 1점을 추가한다.
//[]점수판에서 0점인 사용자를 삭제한다
//  [x]배열의 내부 배열에 대하여 n점인지 아닌지 판별하여 0점이 아닌 사용자만 filter하는
//    filterScore 기능을 구현한다
//  [x]filterScore(friendScoreBoard, 0)으로 0점인 사용자만 삭제한다.
//[]sort 메서드를 이용해 점수가 높은 순으로 정렬시키고 같은 점수인 경우에는 이름순 정렬한다.
//[]rank에서 점수를 제거하고 닉네임만을 추출하여 rankDismantled에 저장한다.
//[]rankDismantled의 가장 앞 5개 배열을 잘라 answer로 반환한다.