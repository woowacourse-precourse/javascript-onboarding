function problem7(user, friends, visitors) {
  var answer;

  new_friends = [];
  already_friends=[];

  for(let friend of friends){
    already_friends.push(friend[0]);
    new_friends.push(friend[1]);
  }

  for(let visitor of visitors){
    new_friends.push(visitor);
  }

  //친구 추천 목록에 들어갈 가능성이 있는 모든 사람을 리스트형으로 저장
  new_friends = Array.from(new Set(new_friends));
  already_friends = Array.from(new Set(already_friends));
  
  new_friends = DeleteElements(new_friends, already_friends);
  new_friends = DeleteElements(new_friends, [user]);

  //각 사람별 추천 score값을 사전 형태로 저장
  let scores = [];

  for(let friend of new_friends){
    each_score = {}
    each_score['name'] = friend;
    each_score['score'] = 0;
    scores.push(each_score);
  }

  //score값을 계산
  for(let friend of friends){
    
    let i = new_friends.indexOf(friend[1]);

    if(i>-1)
      scores[i]["score"] = scores[i]["score"] + 10;
  }

  for(let visitor of visitors){

    let i = new_friends.indexOf(visitor);

    if(i>-1)
      scores[i]["score"] = scores[i]["score"] +1;
  }

  //추천 score를 기준으로 sorting 후 상위 5명만을 반환 
  scores = scores.sort(function(a, b){
     return b.score - a.score;
  });

  recommend_friend = [];
  for(let friend of scores){
    recommend_friend.push(friend['name']);
  }

  recommend_friend = recommend_friend.slice(0,5);

  answer = recommend_friend;
  return answer;
}

//리스트(arr)와 제거할 리스트 요소(element_arr)를 입력값으로, element_arr가 arr안에 존재할 시 모두 제거 후 arr를 반환
function DeleteElements(arr, element_arr){
  
  for(let element of element_arr){
    let i = arr.indexOf(element);
    
    while(i >-1){
      arr.splice(i, 1);
      i = arr.indexOf(element);
    }
  }

  return arr;
}


module.exports = problem7;
