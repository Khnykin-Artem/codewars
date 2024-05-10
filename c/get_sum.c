int get_sum (int a, int b) {
  int min = (b <= a) ? b : a;
  int max = (a >= b) ? a : b;
  int sum = min;

  for (int i = min + 1; i <= max; i++) sum += i;

  return sum;
}

