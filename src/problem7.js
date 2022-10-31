/*
1. friends 배열 순회하면서 아이디별로 친구 목록 생성
2. 임의의 사람 한 명과 user의 친구 중 겹치는 인원수 계산해서 점수 반영
3. visitors 배열 보고 점수 반영
*/

function problem7(user, friends, visitors) {
  let answer = [];

  // 친구 목록 만들기
  const friend_list = new Map();
  
  for (let [a, b] of friends)
  {
    if (!friend_list.has(a))
    {
      friend_list.set(a, new Set());
    }
    if (!friend_list.has(b))
    {
      friend_list.set(b, new Set());
    }

    friend_list.get(a).add(b);
    friend_list.get(b).add(a);
  }

  // user와 친구들은 제외
  const user_friends = friend_list.get(user);
  friend_list.delete(user);

  for (let name of user_friends)
    friend_list.delete(name);

  // 서로 아는 친구 수 계산
  let score = new Map();
  
  for (let name of friend_list.keys())
  {
    score.set(name, 10 * intersection(user_friends, friend_list.get(name)));
  }

  // 방문자 수 계산
  for (let name of visitors)
  {
    if (!user_friends.has(name))
    {
      if (!score.has(name))
        score.set(name, 1);
      else
        score.set(name, score.get(name) + 1);
    }
  }

  // 정답 계산
  score = Array.from(score);
  score.sort(
    function (a, b)
    {
      let val = b[1] - a[1];
      if (val != 0)
        return val;
      else if (a[0] < b[0])
        return -1
      else
        return 1
    }
  );

  for (let i=0; i<5; i++)
  {
    if (i < score.length && score[i][1] > 0)
      answer.push(score[i][0]);
  }

  return answer;
}

function intersection(A, B)
{
  let cnt = 0;
  for (let name of A)
  {
    if (B.has(name))
      cnt++;
  }
  return cnt;
}

module.exports = problem7;
