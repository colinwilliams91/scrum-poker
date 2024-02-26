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

# Check if the 'dist' directory exists
if [ -d "dist" ]; then
    # 'dist' directory exists, remove it
    rm -rf dist/
fi

npm run build