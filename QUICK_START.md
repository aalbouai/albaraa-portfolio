# Quick Start Guide - Portfolio Application

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Seed Database with Sample Data
```bash
npm run seed
```

**Admin Credentials Created:**
- Email: `admin@portfolio.com`
- Password: `admin123`

### Step 3: Start Backend Server
```bash
npm run dev
```
✅ Backend running on http://localhost:5000

### Step 4: Install Frontend Dependencies (New Terminal)
```bash
cd frontend
npm install
```

### Step 5: Start Frontend Server
```bash
npm run dev
```
✅ Frontend running on http://localhost:3000

### Step 6: Open Browser
Navigate to: **http://localhost:3000**

---

## 🎯 What to Test

### As Regular User:
1. Browse: Home, About, Projects, Education, Contact pages
2. Sign Up with new account
3. Submit contact form

### As Admin:
1. Sign In with admin credentials
2. Access Dashboard
3. Manage Projects (Create, Edit, Delete)
4. Manage Education (Create, Edit, Delete)
5. View and manage Contact submissions

---

## 📸 Screenshots Needed for Submission

1. Home Page
2. About Page
3. Projects Page
4. Education Page
5. Contact Page
6. Sign Up Page
7. Sign In Page
8. Dashboard - Projects Tab
9. Dashboard - Education Tab
10. Dashboard - Contacts Tab
11. MongoDB Database Collections
12. GitHub Repository

---

## 📦 Submission Checklist

- [ ] ZIP file of project (without node_modules)
- [ ] Word document with screenshots
- [ ] GitHub repository link
- [ ] All features tested and working

---

## 🔗 Important URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **MongoDB:** mongodb://localhost:27017/portfolio_db

---

## 🆘 Common Issues

**MongoDB not connecting?**
```bash
# Start MongoDB service
# Windows: Run 'mongod' in command prompt
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

**Port already in use?**
- Stop other applications using ports 3000 or 5000
- Or change ports in .env and vite.config.js

**Admin can't access dashboard?**
- Make sure you're signed in as admin@portfolio.com
- Clear browser cache and cookies

---

## 📚 Full Documentation

For detailed instructions, see:
- `README.md` - Complete project documentation
- `SETUP_AND_SUBMISSION_GUIDE.md` - Step-by-step submission guide

---

**Happy Coding! 🎉**

