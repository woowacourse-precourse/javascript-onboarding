function problem7(user, friends, visitors) {
	//추천 친구 목록을 반환할 함수 -> solution
	//전체 사용자 아이디 목록을 구할 함수 -> getUserList
	//유저 리스트에 없는 사용자를 등록해주는 함수 -> register
	//사용자의 점수를 구할 함수 -> getUserPoint
	//사용자와 함께 아는 친구 수를 구할 함수 -> friendWith
	//사용자의 현재 친구 목록을 구하는 함수 -> friendNow
	//타임라인 방문 횟수를 구할 함수 -> countVisit

	return solution(user, friends, visitors);
}

function solution(user, friends, visitors) {
	const userList = getUserList(user, friends, visitors);
}

function getUserList(user, friends, visitors) {
	let userList = [user];

	register(userList, friends.flat());
	register(visitors);

	return userList;
}

function register(userList, list) {
	list.forEach((id) => {
		if (!userList.includes(id)) userList.push(id);
	});
}

function getUserPoint() {}

function friendWith() {}

function friendNow() {}

function countVisit() {}

module.exports = problem7;
