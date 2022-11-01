function problem7(user, friends, visitors) {
	// 1. friends 돌면서 friendDict 채우기
	// 2. friendDict에서 user친구들의 친구 중 유저가 모르는 사람으로 scoreDict 만들고 점수 주기
	// 3. 타임라인 방문 횟수도 점수 주기
	// 4. 가장 높은 순 5명 추천, 점수 같으면 이름순, 0점인 경우 추천하지 않음
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

	friends.forEach((friend) => {
		const a = friend[0];
		const b = friend[1];

		addFriendDict(a, b, friendDict);
		addFriendDict(b, a, friendDict);
	});

	console.log(friendDict);
	return answer;
}

module.exports = problem7;
