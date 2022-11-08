const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
	MissionUtils.Console.readLine = jest.fn();
	answers.reduce((acc, input) => {
		return acc.mockImplementationOnce((question, callback) => {
			callback(input);
		});
	}, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('숫자 야구 게임', () => {
	test('게임 종료 후 재시작', () => {
		const randoms = [1, 3, 5, 5, 8, 9];
		const answers = ['246', '135', '1', '597', '589', '2'];
		const logSpy = getLogSpy();
		const messages = ['낫싱', '3스트라이크', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

		mockRandoms(randoms);
		mockQuestions(answers);

		const app = new App();
		app.play();

		messages.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});

	test('사용자 정답 예외 테스트 - 3자리가 아닌 경우', () => {
		const randoms = [1, 3, 5];
		const answers = ['1234'];

		mockRandoms(randoms);
		mockQuestions(answers);

		expect(() => {
			const app = new App();
			app.play();
		}).toThrow();
	});

	test('사용자 정답 예외 테스트 - 중복된 숫자가 있는 경우', () => {
		const randoms = [1, 3, 5];
		const answers = ['121'];

		mockRandoms(randoms);
		mockQuestions(answers);

		expect(() => {
			const app = new App();
			app.play();
		}).toThrow();
	});

	test('사용자 정답 예외 테스트 - 숫자가 아닌 문자가 섞여있는 경우', () => {
		const randoms = [1, 3, 5];
		const answers = ['12-'];

		mockRandoms(randoms);
		mockQuestions(answers);

		expect(() => {
			const app = new App();
			app.play();
		}).toThrow();
	});

	test('사용자 정답 예외 테스트 - 숫자 0이 섞여있는 경우', () => {
		const randoms = [1, 3, 5];
		const answers = ['120'];

		mockRandoms(randoms);
		mockQuestions(answers);

		expect(() => {
			const app = new App();
			app.play();
		}).toThrow();
	});
});
