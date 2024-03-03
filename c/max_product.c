#include <stdio.h>
#include <limits.h>
#include <stddef.h>
#include <stdlib.h>

int max_product (int numbers[], int numbers_size, int sub_size);

int main (void) {
  int max_product_result = max_product((int[]){4, 3, 5}, 2, 3);
  printf("%d\n", max_product_result);

  return 0;
}

int *reverse_array (int array[], int array_size) {
  int *reversed_number_array = malloc(sizeof(int) * array_size);
  int index_reverse = 0;

  for (int i = array_size - 1; i >= 0; i--) {
    reversed_number_array[index_reverse] = array[i];
    index_reverse++;
  }

  return reversed_number_array;
}

int max_product (int numbers[], int numbers_size, int sub_size) {
  int max_numbers[] = {};
  int count = 0;
  int max = INT_MIN;

  for (int i = 0; i < numbers_size; i++) {
    if (numbers[i] > max) {
      max_numbers[count] = numbers[i];
      max = numbers[i];
      count++;
    }
  }

  int max_numbers_size = sizeof(max_numbers) / sizeof(max_numbers[0]);
  int result = 1;
  int *reversed_array = reverse_array(max_numbers, max_numbers_size);

  for (int i = 0; i < sub_size; i++) {
    result *= reversed_array[i];
  }

  return result;
}
