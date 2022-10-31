function problem7(user, friends, visitors) {
    let input = friends;
    let friend = new Map() ; //친구 map
    let score = new Map() ;  // 점수판
    for (let i = 0; i < input.length; i++) {    //친구 - [친구] 맵 만들기 및 score판 설정
        let [first, sec] = input[i];
        score.set(first, 0);
        score.set(sec, 0);
        if (friend.has(first)) friend.get(first).push(sec);
        else friend.set(first, [sec]);
        if (friend.has(sec)) friend.get(sec).push(first);
        else friend.set(sec, [first]);
    }

    let userFriend = friend.get(user);  // user의 친구 구하기
    for (let j = 0; j < userFriend.length; j++) {  
        let friFri = friend.get(userFriend[j]);       //친구의 친구 구하기
        for (let k = 0; k < friFri.length; k++) {
            score.set(friFri[k], score.get(friFri[k]) + 10);  //친구의 친구 점수 추가
        }
    }

    for (let l = 0; l < visitors.length; l++) {     //방문친구 점수 추가
        if (score.has(visitors[l])) score.set(visitors[l], score.get(visitors[l]) + 1);
        else score.set(visitors[l], 1);
    }

    userFriend.forEach(x => score.set(x, -1));  // 기존 친구 점수 -1
    score.set(user, -1);     // 본인 점수 -1
    score = [...score].sort((a, b) => {   //점수별 내림차순 + 동일점수 오름차순
        if (b[1] === a[1]) {
            if (a[0] < b[0]) return -1
        } else return b[1] - a[1];
    });

    let answer = []
    for (let i = 0; i < 5; i++) {
        if (score[i][1] <= 0) break;
        answer.push(score[i][0])
    }
    return answer;
}

module.exports = problem7;
