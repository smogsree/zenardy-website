# Publish Zenardy website to GitHub Pages
# Run after: gh auth login

$ErrorActionPreference = "Stop"
$RepoName = "zenardy-website"

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

Set-Location $PSScriptRoot

Write-Host "Checking GitHub login..."
gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "Not logged in. Run: gh auth login"
  exit 1
}

$user = (gh api user --jq .login)
$exists = gh repo view "$user/$RepoName" 2>$null
if (-not $exists) {
  Write-Host "Creating public repo: $user/$RepoName"
  gh repo create $RepoName --public --source=. --remote=origin --push
} else {
  Write-Host "Repo exists. Pushing to origin main..."
  git push -u origin main
}

Write-Host ""
Write-Host "Enable GitHub Pages (one-time):"
Write-Host "  Repo -> Settings -> Pages -> Source: GitHub Actions"
Write-Host ""
Write-Host "Your site URL (after Actions finishes):"
$user = (gh api user --jq .login)
Write-Host "  https://$user.github.io/$RepoName/"
