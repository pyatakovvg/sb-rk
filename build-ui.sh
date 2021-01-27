#!/usr/bin/env bash

echo ''
echo 'Сборка пакетов "UI"'
echo '-------------------'

cd ./ui.packages || return

echo '[--- Contexts ---]'
cd  ./contexts && npx yarn build
echo '[--- Kit ---]'
cd ../kit && npx yarn build

echo ''
echo 'Сборка модулей для приложения'
echo '-----------------------------------------'

cd ../../modules || return

echo '[--- About ---]'
cd  ./About && npx yarn build
echo '[--- Bookkeeping ---]'
cd ../Bookkeeping && npx yarn build
echo '[--- Contacts ---]'
cd ../Contacts && npx yarn build
echo '[--- Criminal ---]'
cd ../Criminal && npx yarn build
echo '[--- Expertise ---]'
cd ../Expertise && npx yarn build
echo '[--- Home ---]'
cd ../Home && npx yarn build
echo '[--- Legal ---]'
cd ../Legal && npx yarn build
echo '[--- NotFound ---]'
cd ../NotFound && npx yarn build
echo '[--- Partners ---]'
cd ../Partners && npx yarn build
echo '[--- Personnel ---]'
cd ../Personnel && npx yarn build
echo '[--- Reviews ---]'
cd ../Reviews && npx yarn build
echo '[--- Safety ---]'
cd ../Safety && npx yarn build
echo '[--- Services ---]'
cd ../Services && npx yarn build

exit 0
