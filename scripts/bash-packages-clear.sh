#!/bin/bash

# This will clear the node_modules cached packages and reinstall for Unix/Bash/ZSH
# Run from root

SCRIPT="./scripts/bash-packages-clear.sh"

if ! [[ -x "$SCRIPT" ]]; then
    echo "First time running script..."
    echo "Setting executable permission..."
    chmod +x "$SCRIPT"
fi

rm -rf ./node_modules

npm i
