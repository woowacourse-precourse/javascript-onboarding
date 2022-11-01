function problem5(money) {
  let answer = [];
  // console.log(money / 50000);
  // console.log(money % 50000);

  // console.log(money);
  let rest = money % 50000; // 237
  if (rest !== 0) {
    answer.push(parseInt(money / 50000));
    rest = rest % 50000;
    // console.log("5만rest:", rest);
    if (rest !== 0) {
      answer.push(parseInt(rest / 10000));
      rest = rest % 10000;
      // console.log("1만rest:", rest);
      if (rest !== 0) {
        answer.push(parseInt(rest / 5000));
        rest = rest % 5000;
        // console.log("5천rest:", rest);
        if (rest !== 0) {
          answer.push(parseInt(rest / 1000));
          rest = rest % 1000;
          // console.log("1천rest", rest);
          if (rest !== 0) {
            answer.push(parseInt(rest / 500));
            rest = rest % 500;
            // console.log("오백rest", rest);
            if (rest !== 0) {
              answer.push(parseInt(rest / 100));
              rest = rest % 100;
              // console.log("백rest", rest);
              if (rest !== 0) {
                answer.push(parseInt(rest / 50));
                rest = rest % 50;
                // console.log("50rest", rest);
                if (rest !== 0) {
                  answer.push(parseInt(rest / 10));
                  rest = rest % 10;
                  // console.log("10rest", rest);
                  if (rest !== 0) {
                    answer.push(parseInt(rest / 1));
                    rest = rest % 1;
                    // console.log("1rest", rest);
                  } else if (rest === 0) {
                    answer = answer.concat([0]);
                  }
                } else if (rest === 0) {
                  answer = answer.concat([0, 0]);
                }
              } else if (rest === 0) {
                answer = answer.concat([0, 0, 0]);
              }
            } else if (rest === 0) {
              answer = answer.concat([0, 0, 0, 0]);
            }
          } else if (rest === 0) {
            answer = answer.concat([0, 0, 0, 0, 0]);
          }
        } else if (rest === 0) {
          answer = answer.concat([0, 0, 0, 0, 0, 0]);
        }
      } else if (rest === 0) {
        answer = answer.concat([0, 0, 0, 0, 0, 0, 0]);
      }
    } else if (rest === 0) {
      answer = answer.concat([0, 0, 0, 0, 0, 0, 0, 0]);
    }
  } else if (money === 50000 || rest === 0) {
    answer = answer.concat([1, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  return answer;
}

module.exports = problem5;

// problem5(50237);
// problem5(15000);
// problem5(11663);
