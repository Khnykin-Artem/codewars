#include <stdbool.h>
#include <math.h>

bool cube_checker (int volume, int side) {
  if (volume <= 0) return false;
  return pow(side, 3) == volume;
}
