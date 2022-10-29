// 기능 목록
// 1. 아는 친구를 찾아 저장하는 기능
// 2. 아는 친구 리스트와 방문한 사람 리스트를 스코어 매기는 기능
// 3. 스코어에 따라 친구 정렬
// 4. 친구인 경우 예외처리 기능

// 친구인 경우 예외처리하는 함수
function filterList(person_score, firstDegree){
  let temp_person_score = person_score.filter(x=>{
    if(!firstDegree.includes(x['user_name'])) return x;
  })
  return temp_person_score;
}

// 점수와 이름에 따라 정렬하는 함수
function sortList(person_score, firstDegree){
  // 이미 친구이 경우는 예외처리
  person_score = filterList(person_score, firstDegree);
  person_score.sort((a, b)=>{
    // 점수를 내림차순, 점수가 같다면 이름을 오름차순하여 정렬
    if(a['score'] !== b['score']) return b['score'] - a['score'];
    else return a['user_name'] - b['user_name'];
  })
  return person_score;
}

// 점수를 계산하는 함수
function scoreSave(person_score, user_list, score){
  // 깊은 복사를 통해 독립적인 리스트 생성
  let temp_person_score = person_score.slice();
  // user_list를 순회하며 기존의 리스트에 이미 있는지 확인
  for(let user_name of user_list){
    let existence = false;

    for(let i = 0; i < temp_person_score.length; i++){
      // 이미 있다면 기존의 점수에 추가
      if(temp_person_score[i]['user_name'] ===  user_name){
        existence = true;
        temp_person_score[i]['score'] += score; 
        break;
      }
    }
    // 없다면 새로 객체 생성하여 저장
    if(!existence) temp_person_score.push({user_name: user_name, score: score});
  }

  return temp_person_score;
}

// 아는사람을 체크하는 함수
function checkAcquaintance(user, friends){
  // 친구 관계를 저장할 객체
  let acquaintance_object = {};
  // 스코어 할당에 해당되는 아는 친구를 저장할 리스트
  let acquaintance_score_user = [];

  // friends 리스트를 순회하며 객체에 양방향으로 친구 관계를 저장
  for(let [user_1, user_2] of friends){
    if(acquaintance_object[user_1]) acquaintance_object[user_1].push(user_2);
    else acquaintance_object[user_1] = [user_2];
    if(acquaintance_object[user_2]) acquaintance_object[user_2].push(user_1);
    else acquaintance_object[user_2] = [user_1];
  }
  // 친구 리스트 저장
  let firstDegree = acquaintance_object[user];
  // 사용자의 친구의 친구를 구하기 위해 user의 친구 리스트를 순회
  for(user_name of firstDegree){
    // user 본인인 경우를 제외하고 저장
    acquaintance_object[user_name].map(x=>{
      if(x !== user) acquaintance_score_user.push(x);
    })
  }
  return [acquaintance_score_user, firstDegree];
}

function problem7(user, friends, visitors) {
  let answer = [];
  // score을 저장할 리스트
  let person_score = [];
  // 아는 사람과 친구를 체크한 리스트
  let [acquaintance_user, firstDegree] = checkAcquaintance(user, friends);
  
  // 아는 사람과 방문한 사람의 점수를 계산하여 리스트에 저장
  person_score = scoreSave(person_score, acquaintance_user, 10).slice();
  person_score = scoreSave(person_score, visitors, 1).slice();

  // person_score을 점수와 이름으로 정렬
  person_score = sortList(person_score, firstDegree);

  // 최대 다섯명만 결과 리스트에 추가
  for(let i = 0; i < person_score.length; i++){
    if(i > 4) break;
    answer.push(person_score[i]['user_name']);
  }

  return answer;
}

module.exports = problem7;
