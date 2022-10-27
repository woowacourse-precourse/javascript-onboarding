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

  # 각자의 max값 구하기
  pobi_max = max(sum0(pobi_left), sum0(pobi_right), mult0(pobi_left), mult0(pobi_right))
  crong_max = max(sum0(crong_left), sum0(crong_right), mult0(crong_left), mult0(crong_right))





