#! /bin/bash

echo "------------------Git checkout-----------------"
git stash
git pull origin master
echo "----------------npm installation-------------------"             
npm install
