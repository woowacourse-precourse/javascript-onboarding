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
		this.getPlayerAnswer();
	}
	getPlayerAnswer() {
		this.Console.readLine('숫자를 입력해주세요 : ', (playerAnswer) => {
			this.playerAnswer = playerAnswer;
			this.validatePlayerAnswer();
			this.evaluate();
		});
	}
	evaluate() {
		const score = { strike: 0, ball: 0 };
		const player = this.playerAnswer.split('');
		const computer = this.computerAnswer.split('');

		player.forEach((v, i) => {
			if (computer[i] === v) score.strike++;
			else if (computer.includes(v)) score.ball++;
		});

		if (score.strike && score.ball) this.Console.print(`${score.ball}볼 ${score.strike}스트라이크`);
		else if (score.strike) this.Console.print(`${score.strike}스트라이크`);
		else if (score.ball) this.Console.print(`${score.ball}볼`);
		else this.Console.print('낫싱');

		if (score.strike === 3) {
			this.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
			this.getNextStep();
		} else this.getPlayerAnswer();
	}
	getNextStep() {
		this.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (nextStep) => {
			this.nextStep = nextStep;
			this.validateNextStep();
			this.next();
		});
	}
	next() {
		if (this.nextStep === '1') this.start();
		if (this.nextStep === '2') this.Console.close();
	}
	validatePlayerAnswer() {
		const arr = this.playerAnswer.split('');
		if (arr.length !== 3) throw new Error('Invalid Player Answer');
		if (new Set(arr).size !== 3) throw new Error('Invalid Player Answer');
		arr.forEach((v) => {
			if (isNaN(v)) throw new Error('Invalid Player Answer');
			if (!Number(v)) throw new Error('Invalid Player Answer');
		});
	}
	validateNextStep() {
		if (!(this.nextStep === '1' || this.nextStep === '2')) throw new Error('Invalid Next Step');
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
