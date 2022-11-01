function problem7(user, friends, visitors) {
	function Friend(friendName) {
		this.friendName = friendName;
		this.score = 0;
		this.visitCnt = 0;
		this.knowingCnt = 0;
		this.isFriend = false;
		this.calScore = calScore;
	}
	function calScore() {
		this.score = visitCnt + knowingCnt * 10;
	}
	let answer;

	let friendsArray = [];

	return answer;
}

module.exports = problem7;
