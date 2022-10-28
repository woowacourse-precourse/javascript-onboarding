function generateAsciiChart() {
  const asciiOfUpperCase = Array.from({ length: 26 }, (v, i) => i + 65);
  const asciiOfLowerCase = Array.from({ length: 26 }, (v, i) => i + 97);

  return { asciiOfUpperCase, asciiOfLowerCase };
}

function convertToAscii(sentence) {
  const ascii = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      ascii.push(sentence.charCodeAt(i));
    }
  }

  return ascii;
}

function convertToWord(ascii, asciiChart) {
  const convertedWords = [];

  ascii.forEach((each) => {
    if (each >= 65 && each <= 90) {
      convertedWords.push(handleEach(each, asciiChart.asciiOfUpperCase));
    }
    if (each >= 97 && each <= 122) {
      convertedWords.push(handleEach(each, asciiChart.asciiOfLowerCase));
    }
  });

  return convertedWords;
}

function handleEach(each, asciiChart) {
  const reversedAsciiChart = reverseArray(asciiChart);
  let idx = asciiChart.indexOf(each);
  return String.fromCharCode(reversedAsciiChart[idx]);
}

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

function combineWords(convertedWords, sentence) {
  let result = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      result.push(convertedWords.shift());
    } else if (sentence[i] == " ") {
      result.push(" ");
    }
  }

  return result.join("");
}

function problem4(word) {
  const asciiChart = generateAsciiChart();
  const asciiFromWord = convertToAscii(word);
  const wordFromAscii = convertToWord(asciiFromWord, asciiChart);
  const result = combineWords(wordFromAscii, word);

  return result;
}

module.exports = problem4;

//expected: "R olev blf"
console.log(problem4("I love you"));
