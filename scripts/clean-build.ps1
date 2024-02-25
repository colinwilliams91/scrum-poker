# This will clear distributed/compiled javascript files (from typescript) and re-compile (to re-sync and garbage collect stale files)
# Run from root

Remove-Item -r -fo dist/

npm run build
