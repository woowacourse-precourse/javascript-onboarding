function problem7(user, friends, visitors) {
  var answer = [];

  let recomm = {};
  let friendList = [];
  let linkedFriends = {};

  //friends를 통해 닉네임 리스트(recomm)를 생성함
  for (i = 0; i < friends.length; i++) 
    recomm = updateRecommList(user, friends[i], recomm);
  delete (recomm[user]);

  //user와 친구인 사람들을 저장하는 friendList 생성
  for (i = 0; i < friends.length; i++) 
    friendList = findUserFriend(user, friends[i], friendList);

  //friendList와 친구인 사람들, count 저장
  linkedFriends = Object.assign({}, recomm);  //recomm의 초기 setting 복사하여 사용
  for (i = 0; i < friends.length; i++) 
    linkedFriends = ch_linkedFriends(friends[i], friendList, linkedFriends); //친구관계리스트 검사
  delete (linkedFriends[user]);

  //linkedFriends를 기반으로 recomm 합산
  const arrLen = Object.keys(linkedFriends).length;
  const tmpList = Object.keys(linkedFriends);
  for (i = 0; i < arrLen; i++)  
    recomm[tmpList[i]] += linkedFriends[tmpList[i]] * 10;
  
  recomm = updateRecommList(user, visitors, recomm);   //recomm에 없는 유저 업데이트

  for (i = 0; i < visitors.length; i++)   //visitors 배열에 따라 recomm점수 계산
  recomm[visitors[i]] += 1;

  for (i = 0; i < friendList.length; i++) //이미 친구인 유저는 추천 리스트에서 삭제
    delete(recomm[friendList[i]]);

  //정렬
  let sortedRecomm = [];
  for (let value in recomm) 
    sortedRecomm.push([value, recomm[value]]);
  
  sortedRecomm.sort(function(a, b) {
    return b[1] - a[1];
  });

  //출력
  for (i = 0; i < sortedRecomm.length; i++) 
    answer.push(sortedRecomm[i][0]);
    
  return answer;
}

function updateRecommList(user, friends, recomm) {
  if (!Object.keys(recomm).some(value => value === friends[0]))   //recomm에 없다면
    recomm[friends[0]] = 0;
  if (!Object.keys(recomm).some(value => value === friends[1]))   //recomm에 없다면
    recomm[friends[1]] = 0;

  return recomm;
}

//friendList를 생성하는 함수
function findUserFriend(user, friends, friendList) {
  if (user === friends[0])
    friendList.push(friends[1])
  if (user === friends[1])
    friendList.push(friends[0])

  return friendList;
}

function ch_linkedFriends(friend, userFriends, linkedFriends) {
  for (j = 0; j < userFriends.length; j++) {
    if (friend[0] == userFriends[j]) 
      linkedFriends[friend[1]] += 1; 
    if (friend[1] == userFriends[j]) 
      linkedFriends[friend[0]] += 1; 
  }
  return linkedFriends;
}

module.exports = problem7;

/*
1. 닉네임, 점수를 가진 객체배열 생성 recomm
2. 배열을 닉네임 기준으로 정렬
3. 사용자 친구를 찾아 배열 friendList에 저장
4. friendList에 있는 유저를 친구로 갖는 유저, 횟수를 담은 객체배열 linkedFriends
5. 횟수에 따라 객체배열 recomm 업데이트

6. visitors 배열에 따라 객체배열 recomm 업데이트

7. value기준으로 recomm 객체배열 정렬
8. value가 0인 부분부터 잘라내기
9. recomm의 닉네임 부분 차례로 출력
*/
