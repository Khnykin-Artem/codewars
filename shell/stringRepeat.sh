#!/bin/bash

repeat=$1;
string=$2;

result='';

for ((i = 0; i < repeat; i++)); do
  result+="$string";
done

echo "$result";
