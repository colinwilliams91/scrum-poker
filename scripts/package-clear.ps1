# This will clear the node_modules cached packages and reinstall for Powershell
# Run from root

Remove-Item -Recurse -Force .\node_modules\

npm i
