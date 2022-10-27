function problem7(user, friends, visitors) {
    var answer = [];
    const userFriendAndUser = []
    const userMap = new Map();
    
    friends.forEach(friend => {
        if (friend[ 0 ] === user) {
            userFriendAndUser.push(friend[ 1 ]);
        }
        if (friend[ 1 ] === user) {
            userFriendAndUser.push(friend[ 0 ]);
        }
        if (friend[ 0 ] === user || friend[ 1 ] === user) {
            return;
        }
        userMap.set(friend[ 0 ], 0);
        userMap.set(friend[ 1 ], 0);
    });
    
    visitors.forEach(visitor => {
        userMap.set(visitor, 0);
    })
    
    //이미 친구인 유저 삭제
    userFriendAndUser.forEach(exceptionPeople => {
        userMap.delete(exceptionPeople);
    })
    
    //가까운 친구 점수 추가
    for (let targetUser of userMap) {
        friends.forEach(friend => {
            if (friend[ 0 ] === targetUser[ 0 ] && userFriendAndUser.includes(friend[ 1 ])) {
                userMap.set(targetUser[ 0 ], targetUser[ 1 ] + 10)
            }
            if (friend[ 1 ] === targetUser[ 0 ] && userFriendAndUser.includes(friend[ 0 ])) {
                userMap.set(targetUser[ 0 ], targetUser[ 1 ] + 10)
            }
        });
    }
    
    //방문 점수 추가
    visitors.forEach(visitor => {
        if (userMap.has(visitor)) {
            userMap.set(visitor, userMap.get(visitor) + 1);
        }
    })
    
    let recommendUserObj = Object.fromEntries(userMap);
    const recommendUserArr = Object.entries(recommendUserObj);
    
    //이름 순 정렬
    recommendUserArr.sort((a, b) => {
        return  a[0] < b[0] ? 0 : a[0] > b[0] ? 1 : -1;
    });
    recommendUserArr.sort((a, b) => a[ 1 ] + b[ 1 ]);
    
    //점수 순 정렬
    recommendUserArr.forEach(userInfo=>{
        answer.push(userInfo[0]);
    })
    
    return answer;
}

module.exports = problem7;
