@echo off
REM Portfolio Setup Script for Windows

echo.
echo ========================================
echo Portfolio Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed.
    echo Please install it from https://nodejs.org/
    pause
    exit /b 1
)

echo.
for /f "tokens=*" %%i in ('node --version') do echo Node.js version: %%i

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo Error: npm is not installed.
    echo Please install Node.js which includes npm.
    pause
    exit /b 1
)

echo.
for /f "tokens=*" %%i in ('npm --version') do echo npm version: %%i

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo Dependencies installed successfully!
echo.

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo.
    echo .env file created! Please update it with your MongoDB URI.
    echo Open .env and replace MONGODB_URI with your connection string
) else (
    echo .env file already exists
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Update .env with your MongoDB connection string
echo 2. Run: npm run dev:all
echo    Or run separately:
echo    - Frontend: npm run dev
echo    - Backend: npm run server
echo.
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5000
echo.
echo For more information, see README.md and DEPLOYMENT.md
echo.
pause
