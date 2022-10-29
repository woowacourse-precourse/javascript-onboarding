function lowercase(num) {
  return 97 + (122 - num);
}

function uppercase(num) {
  return 65 + (90 - num);
}

function problem4(word) {
  let answer = '';

  for (let x of word) {
    const asciiX = x.charCodeAt();
    let reverseAscii;

    if (asciiX >= 65 && asciiX <= 90) {
      reverseAscii = uppercase(asciiX);
    } else if (asciiX >= 97 && asciiX <= 122) {
      reverseAscii = lowercase(asciiX);
    } else {
      reverseAscii = asciiX;
    }

    answer += String.fromCharCode(reverseAscii);
  }

  return answer;
}

module.exports = problem4;
