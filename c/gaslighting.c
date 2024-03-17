#include <stdbool.h>
#include <stdio.h>
#include <regex.h>

bool check_letter (char letters[], char word[]);

bool gaslighting (
  const char shirt_word[],
  const char your_word[],
  const char friends_letters[]
) {
  bool result = false;
  bool check_1 = check_letter(friends_letters, shirt_word);
  bool check_2 = check_letter(friends_letters, your_word);

  if (check_1 != check_2) result = true;

  return result;
}

bool check_letter (char letters[], char word[]) {
  bool checker = false;
  regex_t regex;
  int value;

  value = regcomp(&regex,letters, 0);
  value = regexec(&regex, word, 0, NULL, 0);

  if (value == 0) checker = true;
  return checker;
}
