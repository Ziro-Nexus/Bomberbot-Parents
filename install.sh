#!/usr/bin/env bash
# APT dependencies
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y python3-pip
sudo apt-get install -y npm
sudo apt-get install -y openssl build-essential xorg libssl-dev
sudo apt-get install -y wget

# PIP dependencies
sudo pip3 install -r python_modules.txt

# NPM dependencies
sudo npm install --prefix frontend/

# Neccesary for PDF app
WKHTML2PDF_VERSION='0.12.4'
wget "https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/${WKHTML2PDF_VERSION}/wkhtmltox-${WKHTML2PDF_VERSION}_linux-generic-amd64.tar.xz"
tar -xJf "wkhtmltox-${WKHTML2PDF_VERSION}_linux-generic-amd64.tar.xz"
cd wkhtmltox
sudo chown root:root bin/wkhtmltopdf
sudo cp -r * /usr/
cd ../

# Compile Webpack
sudo npm run webpack --prefix frontend/

# Migrate
python3 manage.py migrate
python3 manage.py makemigrations


rm -rf wkhtmltox-0.12.4_linux-generic-amd64.tar.xz
rm -rf wkhtmltox

RED='\033[0;31m'
NC='\033[0m'
echo -e " ${RED} All dependencies are installed, please create a superuser and go to the /admin/ route. the advices models need to be fill manualy, see README.md ${NC}"

