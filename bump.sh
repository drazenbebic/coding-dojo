#!/bin/bash
set -e

NEW_VERSION="$1"

echo "Bumping version to $NEW_VERSION in root package.json..."
jq --arg newVersion "$NEW_VERSION" '.version = $newVersion' package.json > package.json.tmp && mv package.json.tmp package.json

# Update package.json files in packages/*
for pkg in packages/*/package.json; do
  if [ -f "$pkg" ]; then
    echo "Bumping version in $pkg..."
    jq --arg newVersion "$NEW_VERSION" '.version = $newVersion' "$pkg" > "$pkg.tmp" && mv "$pkg.tmp" "$pkg"
  fi
done

# Update package.json files in web/*
for pkg in web/*/package.json; do
  if [ -f "$pkg" ]; then
    echo "Bumping version in $pkg..."
    jq --arg newVersion "$NEW_VERSION" '.version = $newVersion' "$pkg" > "$pkg.tmp" && mv "$pkg.tmp" "$pkg"
  fi
done

echo "Version bump complete!"