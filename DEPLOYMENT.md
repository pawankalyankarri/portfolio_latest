# Deployment Guide

This guide will help you deploy your portfolio website to production.

## Frontend Deployment (React + Vite)

### Option 1: Vercel (Recommended)

Vercel is the easiest option for deploying Vite apps.

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework: Other (Vite will be auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables: Add API URL if different from localhost

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Netlify

1. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select your GitHub repository

2. **Configure Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**
   - Netlify will automatically deploy on each push to main

### Option 3: Self-Hosted

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder to your server**
   - Use FTP, SCP, or your hosting provider's file manager
   - Point your web server (Nginx/Apache) to serve the dist folder

3. **Configure server for SPA routing**
   - All routes should serve `index.html`
   - Example Nginx config:
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

## Backend Deployment

### Option 1: Railway (Recommended for Node.js)

1. **Push code to GitHub**

2. **Connect to Railway**
   - Go to https://railway.app
   - Click "Create New Project"
   - Select "GitHub Repo"
   - Choose your repository

3. **Configure Environment**
   - Go to Variables tab
   - Add:
     - `MONGODB_URI`: Your MongoDB connection string
     - `NODE_ENV`: production
     - `PORT`: 5000 (Railway will expose it)

4. **Deploy**
   - Railway will auto-deploy on push
   - You'll get a domain automatically

5. **Update Frontend API URL**
   - In Vercel/Netlify, set environment variable:
     - `VITE_API_URL`: Your Railway domain

### Option 2: Render

1. **Create a new Web Service**
   - Go to https://render.com
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub

2. **Configure Build & Start Commands**
   - Build Command: `npm install`
   - Start Command: `npm run server`

3. **Add Environment Variables**
   - `MONGODB_URI`: Your MongoDB connection
   - `NODE_ENV`: production

4. **Deploy**
   - Click "Create Web Service"
   - Render will deploy and give you a URL

### Option 3: Heroku (with buildpack)

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and Create App**
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## MongoDB Setup

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a cluster
4. Create a database user
5. Whitelist IP addresses
6. Copy connection string
7. Use as `MONGODB_URI` in your backend

### Option 2: Local MongoDB

If you want to use local MongoDB:
```bash
# Install MongoDB on your system
# Start MongoDB service
mongod

# Connection string
mongodb://localhost:27017/portfolio
```

## Environment Variables Checklist

### Frontend (Vercel/Netlify)
- [ ] `VITE_API_URL`: Backend API URL (e.g., https://your-backend.railway.app)

### Backend (Railway/Render)
- [ ] `MONGODB_URI`: MongoDB connection string
- [ ] `NODE_ENV`: production
- [ ] `PORT`: Usually auto-configured (5000)
- [ ] `CORS_ORIGIN`: Frontend URL for CORS (e.g., https://your-portfolio.vercel.app)

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Dark/Light theme toggle works
- [ ] Navigation links scroll correctly
- [ ] Contact form submits and saves to database
- [ ] Resume download works
- [ ] All social links are correct
- [ ] Mobile responsive on all devices
- [ ] No console errors
- [ ] Performance is acceptable

## Troubleshooting

### Frontend Issues

**Blank page:**
- Check browser console for errors
- Verify build command ran successfully
- Check that dist folder exists

**API calls failing:**
- Check CORS settings on backend
- Verify API URL environment variable
- Check network tab in browser DevTools

**Theme not working:**
- Clear localStorage
- Check if CSS variables are defined
- Verify Tailwind CSS is loaded

### Backend Issues

**MongoDB connection error:**
- Verify connection string is correct
- Check MongoDB Atlas whitelist IP
- Ensure database user has correct permissions

**CORS errors:**
- Update CORS origin in server.js
- Verify frontend URL matches exactly

**Port already in use:**
- Change PORT in .env
- Kill process using the port

## Monitoring & Maintenance

### Add Logging

Update backend to use a logger:
```bash
npm install winston
```

### Monitor Performance

- Use Vercel Analytics for frontend
- Use Railway/Render monitoring for backend
- Set up email alerts for errors

### Regular Backups

- Set up MongoDB Atlas automated backups
- Or export data regularly:
  ```bash
  mongoexport --uri "mongodb+srv://user:pass@cluster.mongodb.net/portfolio" --collection contacts --out backup.json
  ```

## Custom Domain

### Add Custom Domain to Vercel

1. Go to Vercel project settings
2. Domains section
3. Add your domain
4. Update DNS records with Vercel's nameservers

### Add Custom Domain to Render/Railway

- Similar process, check their documentation for DNS settings

## Security Considerations

- Use HTTPS everywhere (automatic on Vercel/Railway)
- Keep dependencies updated: `npm audit`
- Sanitize user inputs on backend
- Use environment variables for sensitive data
- Implement rate limiting on API endpoints
- Set up CORS properly

## Performance Optimization

### Frontend
- Lazy load images
- Minify and compress assets
- Use CDN for static files
- Enable gzip compression

### Backend
- Add database indexes
- Implement caching
- Use middleware like compression
- Monitor and optimize queries

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- MongoDB Docs: https://docs.mongodb.com
