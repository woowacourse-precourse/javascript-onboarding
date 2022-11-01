// [✅] forms의 배열에서 nickName을 분리한 배열을 만든다.
// [✅] 걸러진 이메일을 담을 result 배열을 만든다.
// [✅] nickName 배열을 순회하며 두 글자 이상의 문자가 연속적으로 포함된 닉네임을 모두 찾는다. / substring
// - [✅] substring을 통해 (substring(index, index + 2)) keyword 추출
// - [✅] 추출한 keyword를 바탕으로 includes(keyword[idx])를 통해 제거 대상인 이름 추출 -> duplicateNick.push()
// [✅] duplicateNick에 존재하는 이름과 forms의 이름을 비교하여, 일치하면 result로 반환
// [✅] result 내 이메일 목록을 오름차순 정렬한다.
// [✅] result 내 이메일 목록에서 중복된 이메일을 제거한다. -> 닉네임 상에서 이미 중복 처리

// [예외처리] -> 제한 사항에 어긋나는 경우로, forms 배열에서 제거
// 신청한 이메일의 길이가 11자 이상 20자 미만이 아닌 경우 (email >= 11 && nick < 20)
// 신청한 이메일이 "email.com" 도메인이 아닌 경우
// 신청한 닉네임이 한글이 아닌 경우
// 신청한 닉네임의 길이가 1글자 이상 20글자 미만이 아닌 경우 (nick >= 1 && nick < 20)
