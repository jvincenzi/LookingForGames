#! /usr/bin/env bash
# Joseph Vincenzi
# chmod +x ~/Git/LookingForGames/scripts/wraith-ware.sh
# run this command to be able to run build copy form any client dir:
#	ln -s ~/Git/LookingForGames/scripts/wraith-ware.sh ~/bin/.


RED='\033[0;31m'
LIGHT_RED='\033[1;31m'
LIGHT_GREEN='\033[1;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;36m'
NC='\033[0m' # No Color

LFG_DIR="${PWD}"
PWD_DIR="${PWD##*/}"

clear

if [[ "${PWD_DIR}" != "LookingForGames" ]]; then
	echo
	echo -e "${LIGHT_RED}< ERROR: You must run this script from the /LookingForGames repository >${NC}"
	echo
	exit
fi

function deleteOld() {
	titleGraphic
	cd ../LookingForGames-runtime/
	echo -e "${LIGHT_GREEN} \e[4m Removing old Files & Folders\e[0m"
	# Removing files
	rm -v index.html
	rm -v main-es5.*.js
	rm -v main-es2015.*.js
	rm -v polyfills-es5.*.js
	rm -v polyfills-es2015.*.js
	rm -v runtime-es5.*.js
	rm -v runtime-es2015.*.js
	rm -v styles.*.css
	# Removing folders
	rm -v -r assets
	#read -p "Press [Enter] key to continue..."
}

function buildOnly() {
	titleGraphic
	echo -e "${LIGHT_GREEN} \e[4m Building distilled files \e[0m"
	cd  ${LFG_DIR}/my-app/
	ng build --prod
	read -p "Press [Enter] key to continue..."
}



function copyOnly(){
	titleGraphic
	cd  ${LFG_DIR}/my-app/dist/my-app
	echo
	echo -e "${LIGHT_GREEN} \e[4m Copying new Files & Folders to /LookingForGames-runtime repo\e[0m"
	echo ""
	cp -v -r . ../../../../LookingForGames-runtime 
}

function gitGoing(){
	titleGraphic
	cd ${LFG_DIR}
	cd ../LookingForGames-runtime
	echo -e "${LIGHT_GREEN} \e[4m Running Git commands \e[0m"
	git add *
	echo -e "${LIGHT_GREEN} \e[4mAdding files\e[0m"
	git commit -m "Updated app for azure"
	echo -e "${LIGHT_GREEN} \e[4mCommitting files\e[0m"
	git push
	echo -e "${LIGHT_GREEN} \e[4mPushing files\e[0m"
	read -p "Press [Enter] key to continue..."
}

function runAll() {
	deleteOld
	buildOnly
	copyOnly
	gitGoing
	echo ""
	read -p "Press [Enter] key to continue..."
}

function rebuild() {
	deleteOld
	buildOnly
	copyOnly
}

function titleGraphic() {
	clear
	echo
	echo
	echo -e " ${LIGHT_GREEN}█     █░ ██▀███   ▄▄▄       ██▓▄▄▄█████▓ ██░ ██     █     █░ ▄▄▄       ██▀███  ▓█████ "
	echo -e               "▓█░ █ ░█░▓██ ▒ ██▒▒████▄    ▓██▒▓  ██▒ ▓▒▓██░ ██▒   ▓█░ █ ░█░▒████▄    ▓██ ▒ ██▒▓█   ▀ "
	echo -e               "▒█░ █ ░█ ▓██ ░▄█ ▒▒██  ▀█▄  ▒██▒▒ ▓██░ ▒░▒██▀▀██░   ▒█░ █ ░█ ▒██  ▀█▄  ▓██ ░▄█ ▒▒███   "
	echo -e               "░█░ █ ░█ ▒██▀▀█▄  ░██▄▄▄▄██ ░██░░ ▓██▓ ░ ░▓█ ░██    ░█░ █ ░█ ░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ "
	echo -e               "░░██▒██▓ ░██▓ ▒██▒ ▓█   ▓██▒░██░  ▒██▒ ░ ░▓█▒░██▓   ░░██▒██▓  ▓█   ▓██▒░██▓ ▒██▒░▒████▒"
	echo -e               "░ ▓░▒ ▒  ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░▓    ▒ ░░    ▒ ░░▒░▒   ░ ▓░▒ ▒   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░"
	echo -e               "  ▒ ░ ░    ░▒ ░ ▒░  ▒   ▒▒ ░ ▒ ░    ░     ▒ ░▒░ ░     ▒ ░ ░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░"
	echo -e               "  ░   ░    ░░   ░   ░   ▒    ▒ ░  ░       ░  ░░ ░     ░   ░    ░   ▒     ░░   ░    ░   "
	echo -e               "    ░       ░           ░  ░ ░            ░  ░  ░       ░          ░  ░   ░        ░  ░\e[0m"
	echo -e               "                                                                                \e[90mv0.0.3a\e[0m"
	echo 
}

while true; do
	titleGraphic
	echo -e "${LIGHT_GREEN} \e[4mMenu\e[0m"
	echo -e "${LIGHT_GREEN}  a) Auto (Delete Old files + Build + Copy over + Git add+commit+push)"
	echo -e "${LIGHT_GREEN}  b) Build Only"
	echo -e "${LIGHT_GREEN}  d) Delete Old dist Files"
	echo -e "${LIGHT_GREEN}  r) Rebuild (Delete Old files + Build + Copy over)"
	echo -e "${LIGHT_RED}  x) Exit"
	echo -e "${LIGHT_RED}  q) Exit"
	echo -e "\n$NC"
	read -p "Please make a selection: " eotuyx
	case $eotuyx in
		[Aa]* ) runAll false; continue;;
		[Bb]* ) buildOnly; continue;;
		[Cc]* ) copyOnly; continue;;
		[Dd]* ) deleteOld; continue;;
		[Rr]* ) rebuild; continue;;
		[XxQq]* ) clear; break;;
		* )  -e "\n$NC" + "Please answer with a, b, d, r, x (or q)";;
	esac
done


