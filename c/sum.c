#include <stdio.h>
#include <limits.h>

int sum(const int numbers[], int length);

int main () {
  int arr[] = {6, 0, 1, 10, 10};
  int sumForPrint = sum(arr, 5);

  printf("%d", sumForPrint);

  return 0;
}

int sum (const int numbers[], int length) {
  int min = INT_MAX;
  int max = INT_MIN;

  int minIndex = 0;
  int maxIndex = 0;

  for (int i = 0; i < length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
      minIndex = i;
    }

    if (numbers[i] > max) {
      max = numbers[i];
      maxIndex = i;
    }
  }

  int sum = 0;

  for (int i = 0; i < length; i++) {
    if (i == minIndex || i == maxIndex) continue;
    sum += numbers[i];
  }

  return sum;
}
