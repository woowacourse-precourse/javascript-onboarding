function problem6(forms) {
  const formsJSON = convertJSON(forms);
  const uniqueWords = findUniqueWordsOfNickname(formsJSON);
  return findEmailByDuplicatedName(formsJSON, uniqueWords).sort();
}

const convertJSON = (forms) => {
  const array = [];
  forms.map(element => {
    array.push({
      email: element[0],
      name: element[1]
    })
  })
  return array;
}

const findUniqueWordsOfNickname = (formsJSON) => {
  let uniqueWords = new Set();
  formsJSON.forEach(element => {
    const nickname = element.name;
    for (let i = 0; i < nickname.length; i++) {
      for (let j = 0; j < nickname.length - i; j++) {
        const word = nickname.slice(j, j + i + 1);
        if (word.length > 1) {
          uniqueWords.add(word);
        }
      }
    }
  });
  return Array.from(uniqueWords);
}

const findEmailByDuplicatedName = (formsJSON, uniqueWords) => {
  let emails = new Set();
  uniqueWords.forEach((word) => {
    const list = formsJSON.filter((form) => form.name.includes(word))
    if (list.length > 1) {
      list.map(
        (el) => {
          emails.add(el.email)
        }
      )
    }
  })
  return Array.from(emails);
}

// 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
// 크루는 1명 이상 10,000명 이하이다.
// 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
// 신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
// 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
// result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.

module.exports = problem6;
