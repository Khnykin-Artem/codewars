#include <stddef.h>

int sum_array(const int *values, size_t count) {
  if (count == 0) return 0;
  int sum = 0;
  for (int i = 0; i < count; i++) {
    sum += values[i];
  }
  return sum;
}

cout << sum_array([1, 2, 3], 3);
