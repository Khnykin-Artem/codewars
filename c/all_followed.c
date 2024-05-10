#include <stdbool.h>
#include <string.h>

bool find_letter (const char *text, char letter);

bool all_followed (const char *text, char a, char b) {
  int length = strlen(text);

  for (int i = 0; i < length; i++) {
    if (text[i] != a || text[i] == b) continue;
    if (text[i + 1] != b) return false;
  }

  if (a != b) return true;
  if (find_letter(text, a)) return false;
  return true;
}

bool find_letter (const char *text,  char letter) {
  int length = strlen(text);
  for (int i = 0; i < length; i++) {
    if (text[i] == letter) return true;
  }
  return false;
}
