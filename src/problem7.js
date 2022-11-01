function problem7(user, friends, visitors) {
  var answer = [];
  let answer2 = [];
  answer2 = sortScore(friendsScore(user, friends, visitors));
  if(answer2.length <=5){
    for(let i = 0; i < answer2.length; i++)
      answer[i] = answer2[i][0];
  }
  else{
    for(let i = 0; i < 5; i++)
      answer[i] = answer2[i][0];
  }
  return answer;
}
function sortScore(score){
  score.sort((a,b) => {
    if(a[1] > b[1]) return -1; //점수기준 내림차순 정렬
    if(a[1] === b[1]){// 점수 같으면 오름차순 정렬
    if(b[0] > a[0]) return -1;
    }
  })
return score;
}
function friendsScore(user, friends, visitors){
  let people = new Set(); //모든 대상
  let meYou =  new Set(); //이미 친구인 대상과 본인

 meYou.add(user);

  for(let i = 0; i < friends.length; i++){
    people.add(friends[i][1]);// 친구의 친구 넣기
    people.add(friends[i][0]);// 친구 넣기
    if(friends[i][1] === user)
      meYou.add(friends[i][0]);// 친구 넣기
    if(friends[i][0] === user)
      meYou.add(friends[i][1]);
  } 
  for(let i = 0; i < visitors.length; i++){
    people.add(visitors[i]);
  }// 방문자들 넣기

  meYou.forEach( e=> {
    people.delete(e);
  })// 이미 친구인 대상은 추천에서 제외 여기부터 people은 추천대상만 지칭

  let score = [];
  for(let i = 0; i < people.size; i++){
    score.push([Array.from(people)[i], 0]);
  } // 추천 대상과 초기화 점수를 이중배열 score에 저장


  for(let j = 0; j < score.length; j++){
    for(let i = 0; i < friends.length; i++){
      if(meYou.has(friends[i][0])&&score[j][0] === friends[i][1]){
        score[j][1] += 10;
      } // 만약 친구의 친구 리스트에 있으면 10점 더해줘
      if(meYou.has(friends[i][1])&&score[j][0] === friends[i][0]){
        score[j][1] += 10;
      } 
    }
    for(let i = 0; i < visitors.length; i++){
      if(score[j][0] === visitors[i]){
        score[j][1] += 1;
      }//만약 방문자 리스트에 있으면 1점 더해줘
    }
  }
 return score;
}
/*
sort함수안에는 사용자 정의함수를 넣을 수 있는데
사용자정의함수가 음수를 반환하면 정렬 안하고 아니면 정렬한다.


 */
module.exports = problem7;
