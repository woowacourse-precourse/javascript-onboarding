function problem1(pobi, crong) {
  var answer;

  // 배열 안의 숫자 하나씩 쪼개서 다시 담기
  function spliceArr(num) {
    num = num.toString();
    let num_arr = [];
    let i = 0;
    while (i < num.length) {
      num_arr.push(num[i]);
      i++;
    }
    return num_arr;
  }

  let pobi_left = spliceArr(pobi[0]);
  let pobi_right = spliceArr(pobi[1]);

  let crong_left = spliceArr(crong[0]);
  let crong_right = spliceArr(crong[1]);

  // 예외 처리
  let pobi_check = pobi[1] - pobi[0];
  let crong_check = crong[1] - crong[0];

  if (pobi_check !== 1 || crong_check !== 1) {
    return -1;
  } else {
    function plus(num) {
      let p = 0;
      let i = 0;
      while (i < num.length) {
        p += parseInt(num[i]);
        i++;
      }
      return p;
    }

    // 더하기
    let pobi_left_plus = plus(pobi_left);
    let pobi_right_plus = plus(pobi_right);

    let crong_left_plus = plus(crong_left);
    let crong_right_plus = plus(crong_right);

    // 곱하기
    function multiple(num) {
      let m = 1;
      let i = 0;
      while (i < num.length) {
        m *= parseInt(num[i]);
        i++;
      }
      return m;
    }

    let pobi_left_multiple = multiple(pobi_left);
    let pobi_right_multiple = multiple(pobi_right);

    let crong_left_multiple = multiple(crong_left);
    let crong_right_multiple = multiple(crong_right);

    // 최대값을 점수로 하기
    let pobi_score = Math.max(
      pobi_left_plus,
      pobi_left_multiple,
      pobi_right_plus,
      pobi_right_multiple
    );
    let crong_score = Math.max(
      crong_left_plus,
      crong_left_multiple,
      crong_right_plus,
      crong_right_multiple
    );

    // 점수 비교하기
    if (pobi_score > crong_score) {
      answer = 1;
    } else if (pobi_score < crong_score) {
      answer = 2;
    } else if (pobi_score === crong_score) {
      answer = 0;
    }

    return answer;
  }
}

module.exports = problem1;

//확인용
// console.log(problem1([97, 98], [197, 198])); // 0
// console.log(problem1([131, 132], [211, 212])); // 1
// console.log(problem1([99, 102], [211, 212])); // -1
