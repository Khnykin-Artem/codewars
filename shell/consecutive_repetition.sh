#!/bin/bash

string=$1;
uniqueArray=();

character="";
num=0;

for ((i=0; i<${#string}; i++))
do
  value="\<${string:$i:1}\>";
  if [[ ${uniqueArray[@]} =~ $value ]]
  then
  else
    uniqueArray+="${string:$i:1}";
  fi
done

# echo "$num,$character";
