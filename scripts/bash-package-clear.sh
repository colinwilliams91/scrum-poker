# This will clear the node_modules cached packages and reinstall for Unix/Bash/ZSH
# Run from root

chmod +x ./scripts/zsh-clear-build.sh

rm -rf ./node_modules

npm i
