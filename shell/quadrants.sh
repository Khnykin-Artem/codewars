#!/bin/bash

x=$1;
y=$2;

result=1;

if [ $y -gt 0 ]
then
  if [ $x -gt 0 ]
  then
    result=1;
  elif [ $x -lt 0 ]
  then
    result=2;
  fi
elif [ $y -lt 0 ]
then
  if [ $x -gt 0 ]
  then
    result=4;
  elif [ $x -lt 0 ]
  then
    result=3;
  fi
fi


echo $result;
exit
