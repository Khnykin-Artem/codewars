#include <stddef.h>

int check_exam (size_t n, const char answers[n], const char student[n]) {
  int result = 0;

  for (int i = 0; i < n; i++) {
    if (answers[i] == student[i]) result += 4;
    if (student[i] == ' ') continue;
    if (student[i] != answers[i]) result--;
  }

  return (result >= 0) ? result : 0;
}
