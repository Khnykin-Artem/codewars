#include <stddef.h>

size_t str_count (const char str[], char letter) {
  int length = strlen(str);
  int count = 0;

  for (int i = 0; i < length; i++) {
    if (str[i] == letter) count++;
  }

  return count;
}
