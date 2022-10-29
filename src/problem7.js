

function problem7(user, friends, visitors) {
  //data initialize
  const f_map = {};
  const f_score = {};
  friends.forEach(f => {
    if(f_map[f[0]]){
      f_map[f[0]].push(f[1]);
    } else {
      f_map[f[0]] = [f[1]];
    }

    if(f_map[f[1]]){
      f_map[f[1]].push(f[0]);
    } else {
      f_map[f[1]] = [f[0]];
    }
    if(!f_score[f[0]]) f_score[f[0]] = 0;
    if(!f_score[f[1]]) f_score[f[1]] = 0;
  })
  
  //방문 점수 게산
  visitors.forEach(v => {
    if(!f_score[v]) {
      f_score[v] = 1;
    } else {
      f_score[v] += 1;
    }
  })

  // 이미 친구 제외
  f_map[user].forEach(u => {
    delete f_map[u];
    delete f_score[u];
  })

  // 함께 친구 점수 계산
  Object.keys(f_map).forEach(u => {
    f_score[u] += f_map[u].filter(x => f_map[user].includes(x)).length * 10;
  })
  
  //본인 제외
  delete f_score[user];
  //0점 제외
  Object.keys(f_score).forEach(f => {
    if(f_score[f] == 0) delete f_score[f];
  })
  
  //순위 정렬
  const rank = []
  const result = []
  Object.keys(f_score).forEach(f => {
    rank.push([f, f_score[f]]);
  })
  rank.sort(function(a, b) {
    if (b[1] - a[1]) {
      return a[0] - b[1];
    }else{
      return b[1]-a[1];
    }
  }).forEach(r => result.push(r[0]));
  
  return result.slice(undefined, 5);
}

module.exports = problem7;
