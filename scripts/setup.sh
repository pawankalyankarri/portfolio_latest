#!/bin/bash

# Portfolio Setup Script
# This script helps you set up the portfolio project

echo "🚀 Portfolio Setup Script"
echo "========================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js which includes npm."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created. Please update it with your MongoDB URI."
    echo "   Open .env and replace MONGODB_URI with your connection string"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "================================"
echo "✅ Setup Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Update .env with your MongoDB connection string"
echo "2. Run: npm run dev:all"
echo "   Or run separately:"
echo "   - Frontend: npm run dev"
echo "   - Backend: npm run server"
echo ""
echo "Frontend: http://localhost:5173"
echo "Backend: http://localhost:5000"
echo ""
echo "For more information, see README.md and DEPLOYMENT.md"
echo ""
