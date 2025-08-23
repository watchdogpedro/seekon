#!/bin/bash

# SEEKON.AI Safe Deployment Script
# This script helps you deploy changes safely to Heroku

echo "🚀 SEEKON.AI Deployment Script"
echo "==============================="

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "server.js" ]; then
    echo "❌ Error: Run this script from the SEEKON project directory"
    exit 1
fi

# Show current git status
echo ""
echo "📊 Current Git Status:"
git status --short

echo ""
echo "🔍 Files that will be deployed:"
git diff --name-only HEAD

# Ask for confirmation
echo ""
read -p "🤔 Do you want to continue with deployment? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

# Get commit message
echo ""
read -p "💬 Enter commit message (or press Enter for default): " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update SEEKON.AI website - $(date '+%Y-%m-%d %H:%M')"
fi

echo ""
echo "🔄 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Deployment stopped."
    exit 1
fi

echo "✅ Build successful!"

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo "ℹ️  No changes to commit or commit failed"
fi

# Push to GitHub first (backup)
echo "☁️  Pushing to GitHub..."
git push origin main

if [ $? -ne 0 ]; then
    echo "⚠️  GitHub push failed, but continuing with Heroku deployment..."
fi

# Deploy to Heroku
echo "🚀 Deploying to Heroku..."
git push heroku main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "🌐 Your website should be live at: https://seekon-ai-platform.herokuapp.com"
    echo "⏰ It may take 1-2 minutes for changes to appear"
else
    echo ""
    echo "❌ Heroku deployment failed!"
    echo "💡 Check the error messages above"
fi

echo ""
echo "✨ Deployment script completed!"