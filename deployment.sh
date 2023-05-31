#! /bin/bash
echo "------------------Node Version----------------"
node -v
echo "------------------Git checkout-----------------"
git stash
git pull origin main
echo "----------------npm installation-------------------"             
npm install
