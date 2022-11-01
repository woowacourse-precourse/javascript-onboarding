function problem7(user, friends, visitors) {
	let answer;
	let friendDict = new Object();
	let scoreDict = new Object();

	const addFriendDict = (a, b, dict) => {
		if (a in dict) {
			dict[a].push(b);
		} else {
			dict[a] = [b];
		}
	};

	// 1. friends 돌면서 friendDict 채우기
	friends.forEach((friend) => {
		const a = friend[0];
		const b = friend[1];

		addFriendDict(a, b, friendDict);
		addFriendDict(b, a, friendDict);
	});

	console.log(friendDict);

	// 2. friendDict에서 user친구들의 친구 중 유저가 모르는 사람으로 scoreDict 만들고 점수 주기
	friendDict[user].forEach((knownFriend) => {
		friendDict[knownFriend].forEach((friendFriend) => {
			// ff 가 유저 스스로거나 이미 유저의 친구면 지나감
			if (friendFriend == user || friendFriend in friendDict[user]) {
			} else if (friendFriend in scoreDict) {
				scoreDict[friendFriend] += 10;
			} else {
				scoreDict[friendFriend] = 10;
			}
		});
	});

	console.log(scoreDict);

	// 3. 타임라인 방문 횟수도 점수 주기
	visitors.forEach((visitor) => {
		console.log(visitor, friendDict[user], friendDict[user].includes(visitor));
		if (friendDict[user].includes(visitor) || visitor == user) {
			// 자기거나 user의 친구인 경우 지나감
		} else if (visitor in scoreDict) {
			scoreDict[visitor] += 1;
		} else {
			scoreDict[visitor] = 1;
		}
	});

	console.log(scoreDict);

	// 4. 가장 높은 순 5명 추천, 점수 같으면 이름순, 0점인 경우 추천하지 않음
	let sorted = Object.entries(scoreDict)
		.sort(([, a], [, b]) => b - a)
		.slice(0, 4)
		.map((item) => {
			return item[0];
		});
	answer = sorted;
	console.log(answer);

	return answer;
}

module.exports = problem7;
