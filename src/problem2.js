function decoding(text) {
  if (text === "") return text;
  let testCase = true;
  let result = text.match(
    /(a{2,})|(b{2,})|(c{2,})|(d{2,})|(e{2,})|(f{2,})|(g{2,})|(h{2,})|(i{2,})|(j{2,})|(k{2,})|(l{2,})|(m{2,})|(n{2,})|(o{2,})|(p{2,})|(q{2,})|(r{2,})|(s{2,})|(t{2,})|(u{2,})|(v{2,})|(w{2,})|(x{2,})|(y{2,})|(z{2,})|(.)/g
  );
  result = result.filter((v) => {
    if (v.length != 1) {
      testCase = false;
      return 0;
    } else {
      return 1;
    }
  });
  result = result.join("");
  return testCase ? result : decoding(result);
}

function problem2(cryptogram) {
  let answer = decoding(cryptogram);
  return answer;
}

module.exports = problem2;
