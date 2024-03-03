#!/bin/bash

IFS='';

read -a array <<< "$1";

for val in "${array[@]}"
do
  echo "$val\n";
done
