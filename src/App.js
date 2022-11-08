class App {
	constructor() {
		this.MissionUtils = require('@woowacourse/mission-utils');
		this.Console = this.MissionUtils.Console;
		this.Random = this.MissionUtils.Random;
	}
	play() {
		this.start();
	}
	start() {
		this.Console.print('숫자 야구 게임을 시작합니다.');
		this.computerAnswer = this.getComputerAnswer();
	}
	getComputerAnswer() {
		const computer = [];
		while (computer.length < 3) {
			const number = this.Random.pickNumberInRange(1, 9);
			if (!computer.includes(number)) {
				computer.push(number);
			}
		}
		return computer.join('');
	}
}

module.exports = App;
