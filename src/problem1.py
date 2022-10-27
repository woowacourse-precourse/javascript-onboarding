# 각 자리 수 더하는 함수
def sum0(n):
  sum_res=0
  while n>0 :
      sum_res+=n%10
      n//=10
  return sum_res

# 각 자리 수 곱하는 함수
def mult0(n):
  mult_res=1
  while n>0 :
      mult_res= mult_res*(n%10)
      n//=10
  return mult_res

# 문제 해결 함수
def problem1(pobi, crong):
  # 각 배열의 왼쪽과 오른쪽 구별
  pobi_left = pobi[0]
  pobi_right = pobi[1]
  crong_left = crong[0]
  crong_right = crong[1]

    # 예외 처리 
  if pobi_left >= pobi_right:
    return -1
  if pobi_left - pobi_right != 1:
    return -1

  if crong_left >= crong_right:
    return -1
  if crong_left - crong_right != 1:
    return -1

  # 각자의 max값 구하기
  pobi_max = max(sum0(pobi_left), sum0(pobi_right), mult0(pobi_left), mult0(pobi_right))
  crong_max = max(sum0(crong_left), sum0(crong_right), mult0(crong_left), mult0(crong_right))

  # 점수 높은 사람 result에 저장
  result = max(pobi_max,crong_max)
  # print(result)

  # 포비가 이기면 1, 크롱이 이기면 2 처리 후 리턴
  if result == pobi_max:
    return 1
  else:
    return 2


# pobi = [97,98]
# crong = [197,198]

# pobi = [131, 132]
# crong = [211, 212]

# 테스트 해보기 
pobi = [99,102]
crong = [211, 212]

# 결과 출력
print(problem1(pobi, crong))




