function problem7(user, friends, visitors) {
	let answer = [];
	let friendsList = [];
	let recommend = {};
	let recommendList = [];

	friends.forEach(el => {
		if (el.includes(user)) {
			for (let i = 0; i < 2; i++) {
				if (el[i] !== user && !friendsList.includes(el[i])) {
					friendsList.push(el[i]);
				}
			}
		} else {
			for (let i = 0; i < 2; i++) {
				if (!friendsList.includes(el[i])) {
					recommend[el[i]] = 0;
				}
			}
		}
	});

	visitors.forEach(el => {
		if (el in recommend) {
			return (recommend[el] += 1);
		}
		return (recommend[el] = 0);
	});

	const temp = Object.keys(recommend);

	friends.forEach(el => {
		if (friendsList.includes(el[0]) && temp.includes(el[1])) {
			recommend[el[1]] += 10;
		}
		if (friendsList.includes(el[1]) && temp.includes(el[0])) {
			recommend[el[0]] += 10;
		}
	});

	temp.forEach(el => {
		if (friendsList.includes(el)) {
			recommend[el] = -1;
		}
	});

	temp.forEach(el => {
		recommendList.push([el, recommend[el]]);
	});

	recommendList.sort((a, b) => {
		return b[1] - a[1];
	});

	for (let i = 0; i < 5; i++) {
		if (recommendList[i][1] > 0) {
			answer.push(recommendList[i][0]);
		}
	}
	return answer;
}

module.exports = problem7;
