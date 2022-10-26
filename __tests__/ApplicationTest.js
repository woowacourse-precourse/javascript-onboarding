const problem1 = require("../src/problem1");
const problem2 = require("../src/problem2");
const problem3 = require("../src/problem3");
const problem4 = require("../src/problem4");
const problem5 = require("../src/problem5");
const problem6 = require("../src/problem6");
const problem7 = require("../src/problem7");

describe("problem1", () => {
  test("Problem1_SameMultiplicationResult_Return0", () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test("Problem1_Param1SumBiggerThanParam2Sum_Return1", () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test("Problem1_Param1PageDiffNotOneException_Return-1", () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param1FirstPageBoundaryException_Return-1", () => {
    expect(problem1([1, 2], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param2FirstPageBoundaryException_Return-1", () => {
    expect(problem1([211, 212], [1, 2])).toEqual(-1);
  });

  test("Problem1_Param2LastPageBoundaryException_Return-1", () => {
    expect(problem1([211, 212], [399, 400])).toEqual(-1);
  });

  test("Problem1_Param1LastPageBoundaryException_Return-1", () => {
    expect(problem1([399, 400], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param1OutOfPageBoundaryException_Return-1", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param2OutOfPageBoundaryException_Return-1", () => {
    expect(problem1([211, 212], [401, 402])).toEqual(-1);
  });

  test("Problem1_Param1OutOfPageBoundaryException_Return-1", () => {
    expect(problem1([-1, 0], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param2OutOfPageBoundaryException_Return-1", () => {
    expect(problem1([211, 212], [-1, 0])).toEqual(-1);
  });

  test("Problem1_Param1LeftPageNumberNotEvenException_Return-1", () => {
    expect(problem1([2, 3], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param2LeftPageNumberNotEvenException_Return-1", () => {
    expect(problem1([211, 212], [2, 3])).toEqual(-1);
  });

  test("Problem1_Param2PageDiffNotOneException_Return-1", () => {
    expect(problem1([211, 212], [99, 102])).toEqual(-1);
  });

  test("Problem1_Param1PageNumberSequenceException_Return-1", () => {
    expect(problem1([2, 1], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param2PageNumberSequenceException_Return-1", () => {
    expect(problem1([211, 212], [2, 1])).toEqual(-1);
  });

  test("Problem1_Param2NotEnoughArraySizeException_Return-1", () => {
    expect(problem1([211, 212], [211])).toEqual(-1);
  });

  test("Problem1_Param1NotEnoughArraySizeException_Return-1", () => {
    expect(problem1([211], [211, 212])).toEqual(-1);
  });

  test("Problem1_NotEnoughNumberOfParamsException_Return-1", () => {
    expect(problem1([211, 212])).toEqual(-1);
  });

  test("Problem1_Param1PageDiffNotOneException_Return-1", () => {
    expect(problem1([1, 1], [211, 212])).toEqual(-1);
  });

  test("Problem1_Param2PageDiffNotOneException_Return-1", () => {
    expect(problem1([211, 212], [1, 1])).toEqual(-1);
  });

  test("Problem1_Param1MulBiggerThanParam2Mul_Return1", () => {
    expect(problem1([197, 198], [195, 196])).toEqual(1);
  });

  test("Problem1_Param1MulBiggerThanParam2Sum_Return1", () => {
    expect(problem1([197, 198], [201, 202])).toEqual(1);
  });

  test("Problem1_Param1MulSmallerThanParam2Mul_Return2", () => {
    expect(problem1([197, 198], [199, 200])).toEqual(2);
  });

  test("Problem1_Param1SumSmallerThanParam2Sum_Return2", () => {
    expect(problem1([111, 112], [211, 212])).toEqual(2);
  });

  test("Problem1_Param1SumSmallerThanParam2Mul_Return2", () => {
    expect(problem1([201, 202], [197, 198])).toEqual(2);
  });

  test("Problem1_SameParamValue_Return0", () => {
    expect(problem1([197, 198], [197, 198])).toEqual(0);
  });

  test("Problem1_SameMultiplicationResult_Return0", () => {
    expect(problem1([143, 144], [217, 218])).toEqual(0);
  });
});

describe("problem2", () => {
  test("case1", () => {
    expect(problem2("browoanoommnaon")).toEqual("brown");
  });
  test("case2", () => {
    expect(problem2("zyelleyz")).toEqual("");
  });
});

describe("problem3", () => {
  test("case1", () => {
    expect(problem3(13)).toEqual(4);
  });
  test("case2", () => {
    expect(problem3(33)).toEqual(14);
  });
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });
});

describe("problem5", () => {
  test("case1", () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test("case2", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
});

describe("problem6", () => {
  test("case1", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
  });
});

describe("problem7", () => {
  test("case1", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "jun", "bedi"]);
  });
});
