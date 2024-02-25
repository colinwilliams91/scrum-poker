# This will clear distributed/compiled javascript files (from typescript) and re-compile (to re-sync and garbage collect stale files)
# Run from root

# Check if script execution is blocked due to execution policy
if ((Get-ExecutionPolicy) -eq "Restricted") {
  Write-Host "Script execution is currently blocked due to the execution policy."
  Write-Host "We will now bypass the execution policy for this script."

  # Bypass the execution policy for this session and execute the script
  & powershell.exe -ExecutionPolicy Bypass -File .\YourScript.ps1
}

Remove-Item -r -fo dist/

npm run build
