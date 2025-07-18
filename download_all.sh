#!/bin/bash

echo "Starting asset download process..."

# Create directories
mkdir -p assets/fonts assets/images assets/js assets/icons assets/data

# Download fonts first (sample of 5 files to test)
echo "Downloading fonts..."
wget -q "https://framerusercontent.com/assets/8146yzNKvCxUwupBkhahgl8q4.woff2" -O "assets/fonts/8146yzNKvCxUwupBkhahgl8q4.woff2"
wget -q "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2" -O "assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2"
wget -q "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2" -O "assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2"
wget -q "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2" -O "assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2"
wget -q "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2" -O "assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2"

echo "Downloaded sample fonts. Checking if they downloaded correctly..."
ls -la assets/fonts/