function problem7(user, friends, visitors) {
    
    let userfriend = [];
    let answer = [];
    let result = [];
    let score = new Map();
    
    // userfriend 찾기
    for (let friend of friends) {
        if (friend[0] === user) {
            userfriend.push(friend[1]);
        } else if (friend[1] === user) {
            userfriend.push(friend[0]);
        }
    }
    
    // closefriend에게 점수 주기
    for (i=0; i<friends.length; i++) {
        if (!friends[i].includes(user)) {
            for (let j=0; j<2; j++) {
                score.set(friends[i][j], 10);
            }
        }
        else {
            for (let j=0; j<2; j++) {
                score.set(friends[i][j], 0);
            }
        }
    }
    
    // 방문자에게 점수 부여
    for (let visitor of visitors) {
        if (!score.has(visitor)) {
            score.set(visitor, 1);
        } 
        else if (score.get(visitor) !== 0) {
            score.set(visitor, score.get(visitor) + 1);
        }
    }
    
    // 점수 sort
    result = [...score].sort((a, b) => {
        // 동점이 아니면 점수 기준으로 내림차순
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } 
        // 동점이면 이름순으로 올림차순
        else {
            if (a[0] < b[0]) return -1;
            else if (b[0] < a[0]) return 1;
            else return 0;
        }
    })
    
    // 추천 친구 리스트
    for (let i = 0; i < result.length; i++) {
        if (result[i][1] === 0) {
        continue;
        }
        else {
            answer.push(result[i][0]);
        }
    }
    
    return answer.filter(x => !userfriend.includes(x)).slice(0, 5);
}

module.exports = problem7;
