#!/usr/bin/env bash
# APT dependencies
sudo apt update
sudo apt install -y nodejs
sudo apt install -y python3-pip
sudo apt install -y npm

# PIP dependencies
sudo pip3 install -r python_modules.txt

# NPM dependencies
sudo npm install --prefix frontend/

# Compile Webpack
sudo npm run webpack --prefix frontend/

