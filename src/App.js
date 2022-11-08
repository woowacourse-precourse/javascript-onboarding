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
	}
}

module.exports = App;
