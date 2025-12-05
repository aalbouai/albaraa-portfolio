# Deployment Guide - Portfolio Application

This guide provides step-by-step instructions for deploying your portfolio application to the cloud.

## Prerequisites

- GitHub account with your code pushed
- MongoDB Atlas account (already configured)
- Cloud hosting account (Render, Vercel, or Railway)

## Option 1: Deploy to Render (Recommended)

Render is a modern cloud platform that makes it easy to deploy full-stack applications.

### Step 1: Prepare Your Repository

1. Make sure all your code is committed and pushed to GitHub
2. Ensure your `.env` file is in `.gitignore` (it should be)

### Step 2: Deploy Backend to Render

1. Go to [https://render.com](https://render.com) and sign up/sign in
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `portfolio-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main` or `master`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables:
   - Click "Advanced" → "Add Environment Variable"
   - Add these variables:
     ```
     NODE_ENV=production
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_jwt_secret_key_change_this_in_production_2024
     PORT=5000
     ```
   - **IMPORTANT**: Use your MongoDB Atlas connection string from your `.env` file

6. Click "Create Web Service"
7. Wait for deployment to complete (5-10 minutes)
8. Copy your backend URL (e.g., `https://portfolio-backend-xxxx.onrender.com`)

### Step 3: Deploy Frontend to Render

1. Click "New +" and select "Static Site"
2. Connect your GitHub repository again
3. Configure the service:
   - **Name**: `portfolio-frontend`
   - **Branch**: `main` or `master`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

4. Add Environment Variable:
   - Click "Advanced" → "Add Environment Variable"
   - Add:
     ```
     VITE_API_URL=your_backend_url_from_step_2
     ```

5. Click "Create Static Site"
6. Wait for deployment to complete

### Step 4: Update Frontend API Configuration

You need to update your frontend to use the deployed backend URL:

1. Create a new file `frontend/src/config.js`:
   ```javascript
   export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```

2. Update your API calls to use this URL instead of hardcoded localhost

3. Commit and push changes - Render will auto-deploy

### Step 5: Test Your Deployed Application

1. Visit your frontend URL
2. Test all features:
   - Navigation
   - Sign In (use admin@portfolio.com / admin123)
   - Dashboard
   - Contact form
   - Projects and Education pages

---

## Option 2: Deploy to Vercel + Railway

### Deploy Backend to Railway

1. Go to [https://railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Configure:
   - **Root Directory**: `backend`
   - Add environment variables (same as Render)
6. Deploy and copy the URL

### Deploy Frontend to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variable:
   - `VITE_API_URL=your_railway_backend_url`
7. Deploy

---

## Option 3: Deploy to Netlify + Render

### Deploy Backend to Render
(Same as Option 1, Step 2)

### Deploy Frontend to Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
6. Add environment variable:
   - `VITE_API_URL=your_render_backend_url`
7. Deploy

---

## Post-Deployment Checklist

- [ ] Backend is accessible and returns API responses
- [ ] Frontend loads without errors
- [ ] Can sign in with admin credentials
- [ ] Can access admin dashboard
- [ ] Contact form works
- [ ] Projects and Education data loads from database
- [ ] All navigation works correctly

---

## Troubleshooting

### Backend Issues

**Problem**: Backend won't start
- Check environment variables are set correctly
- Verify MongoDB Atlas connection string
- Check Render logs for errors

**Problem**: CORS errors
- Update backend CORS configuration to allow your frontend domain

### Frontend Issues

**Problem**: API calls fail
- Verify VITE_API_URL is set correctly
- Check browser console for errors
- Ensure backend is running

**Problem**: Build fails
- Check build logs
- Verify all dependencies are in package.json
- Try building locally first: `npm run build`

---

## CI/CD Setup

Once deployed, both Render and Vercel support automatic deployments:

1. Any push to your main/master branch will trigger a new deployment
2. You can see deployment status in the platform dashboard
3. Failed deployments will show error logs

---

## Important Notes

1. **Free Tier Limitations**:
   - Render free tier: Services sleep after 15 minutes of inactivity
   - First request after sleep may take 30-60 seconds
   - Consider upgrading for production use

2. **Environment Variables**:
   - Never commit `.env` files
   - Always set environment variables in the hosting platform
   - Use different values for production vs development

3. **Database**:
   - MongoDB Atlas is already cloud-based ✓
   - Make sure to whitelist all IPs (0.0.0.0/0) in Atlas for cloud deployments
   - Or whitelist specific IPs from your hosting provider

---

## Submission Information

After deployment, you'll need:

1. **Deployed Frontend URL**: `https://your-app.onrender.com` or `https://your-app.vercel.app`
2. **GitHub Repository URL**: `https://github.com/yourusername/albaraa_portfolio`
3. **Screenshots**: Take screenshots of:
   - Deployed home page
   - Admin dashboard
   - Render/Vercel deployment dashboard
   - Before and after CI/CD update

---

## Support

If you encounter issues:
1. Check the platform's documentation
2. Review deployment logs
3. Test locally first to isolate the issue
4. Check environment variables are set correctly

