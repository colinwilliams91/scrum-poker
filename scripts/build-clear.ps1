# This will clear distributed/compiled javascript files (from typescript) and re-compile (to re-sync and garbage collect stale files)
# Run from root

# Check if script execution is blocked due to execution policy
if ((Get-ExecutionPolicy) -eq "Restricted") {
  Write-Host "Script execution is currently blocked due to the execution policy."
  Write-Host "We will now bypass the execution policy for this script."

  # Bypass the execution policy for this session and execute the script
  & powershell.exe -ExecutionPolicy Bypass -File .\scripts\build-clear.ps1
}

# Check if the 'dist' directory exists
if (Test-Path dist -PathType Container) {
  # 'dist' directory exists, remove it
  Remove-Item -Recurse -Force dist/
}

npm run build
