#!/bin/bash

# This will clear distributed/compiled javascript files (from typescript) and re-compile
# (to re-sync and garbage collect stale files)
# Run from root

SCRIPT="./scripts/bash-build-clear.sh"

if ! [[ -x "$SCRIPT" ]]; then
    echo "First time running script..."
    echo "Setting executable permission..."
    chmod +x "$SCRIPT"
fi

rm -rf ./dist

npm run build