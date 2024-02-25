# This will clear the node_modules cached packages and reinstall for Powershell
# Run from root

# Check if script execution is blocked due to execution policy
if ((Get-ExecutionPolicy) -eq "Restricted") {
  Write-Host "Script execution is currently blocked due to the execution policy."
  Write-Host "We will now bypass the execution policy for this script."

  # Bypass the execution policy for this session and execute the script
  & powershell.exe -ExecutionPolicy Bypass -File .\scripts\packages-clear.ps1
}

Remove-Item -Recurse -Force .\node_modules\

npm i
