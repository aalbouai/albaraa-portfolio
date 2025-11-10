# Portfolio Application - Setup and Submission Guide

## 📋 Complete Step-by-Step Instructions

This guide will walk you through setting up, running, testing, and submitting your portfolio application for Assignment 3.

---

## Part 1: Initial Setup

### Step 1: Install Prerequisites

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Verify installation: Open terminal/command prompt and run:
     ```bash
     node --version
     npm --version
     ```

2. **Install MongoDB**
   - Download from: https://www.mongodb.com/try/download/community
   - Install MongoDB Community Edition
   - Start MongoDB service:
     - **Windows**: MongoDB should start automatically, or run `mongod` in command prompt
     - **Mac**: Run `brew services start mongodb-community` (if using Homebrew)
     - **Linux**: Run `sudo systemctl start mongod`

3. **Verify MongoDB is Running**
   ```bash
   # Open a new terminal and run:
   mongosh
   # You should see MongoDB shell. Type 'exit' to quit.
   ```

---

## Part 2: Running the Application

### Step 2: Install Backend Dependencies

1. Open terminal/command prompt
2. Navigate to the backend folder:
   ```bash
   cd "C:\Users\Albaraa\OneDrive\Desktop\Centennial College\Semester 1\Web Application Development\albaraa_portfolio\backend"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Wait for installation to complete (may take 2-3 minutes)

### Step 3: Seed the Database

1. In the same backend terminal, run:
   ```bash
   npm run seed
   ```
2. You should see output showing:
   - Admin user created
   - Education records created
   - Projects created
   - **Admin credentials displayed:**
     - Email: admin@portfolio.com
     - Password: admin123

### Step 4: Start the Backend Server

1. In the backend terminal, run:
   ```bash
   npm run dev
   ```
2. You should see:
   ```
   Server running in development mode on port 5000
   MongoDB Connected: localhost
   ```
3. **Keep this terminal window open!**

### Step 5: Install Frontend Dependencies

1. Open a **NEW** terminal/command prompt window
2. Navigate to the frontend folder:
   ```bash
   cd "C:\Users\Albaraa\OneDrive\Desktop\Centennial College\Semester 1\Web Application Development\albaraa_portfolio\frontend"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Wait for installation to complete

### Step 6: Start the Frontend Server

1. In the frontend terminal, run:
   ```bash
   npm run dev
   ```
2. You should see:
   ```
   VITE v5.x.x  ready in xxx ms
   ➜  Local:   http://localhost:3000/
   ```
3. **Keep this terminal window open too!**

---

## Part 3: Testing the Application

### Step 7: Access the Website

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: `http://localhost:3000`
3. You should see the portfolio home page

### Step 8: Test Public Pages (As Regular User)

1. **Home Page** - Click "Home" in navigation
2. **About Page** - Click "About" in navigation
3. **Projects Page** - Click "Projects" - you should see 5 sample projects
4. **Education Page** - Click "Education" - you should see 2 education records
5. **Contact Page** - Click "Contact" and test the form:
   - Fill in: Name, Email, Subject, Message
   - Click "Send Message"
   - You should see success message

### Step 9: Test User Registration

1. Click "Sign Up" in the navigation
2. Fill in the form:
   - Username: testuser
   - Email: test@example.com
   - Password: test123
   - Confirm Password: test123
3. Click "Sign Up"
4. You should be redirected to home page and see your username in navigation

### Step 10: Test Admin Login and Dashboard

1. Click "Sign Out" (if logged in as testuser)
2. Click "Sign In"
3. Enter admin credentials:
   - Email: admin@portfolio.com
   - Password: admin123
4. Click "Sign In"
5. You should see "Dashboard" link in navigation
6. Click "Dashboard"

### Step 11: Test Admin CRUD Operations

**Test Projects Management:**
1. In Dashboard, click "Projects" tab
2. Click "Add Project" button
3. Fill in the form with test data
4. Click "Create Project"
5. Verify project appears in the list
6. Click Edit icon (pencil) on a project
7. Modify some fields
8. Click "Update Project"
9. Click Delete icon (trash) on a project
10. Confirm deletion

**Test Education Management:**
1. Click "Education" tab
2. Click "Add Education"
3. Fill in the form:
   - Institution: Test University
   - Degree: Bachelor's Degree
   - Field of Study: Computer Science
   - Start Date: Select a date
   - Check "Currently studying here" OR select End Date
4. Click "Add Education"
5. Test Edit and Delete functions

**Test Contacts Management:**
1. Click "Contacts" tab
2. You should see the contact form submission from Step 8
3. Change status dropdown (New → Read → Replied)
4. Test Delete function

---

## Part 4: Taking Screenshots for Submission

### Step 12: Capture Required Screenshots

Take screenshots of the following (use Windows Snipping Tool or Snip & Sketch):

1. **Home Page**
   - Full page view showing hero section and features

2. **About Page**
   - Showing skills and information

3. **Projects Page**
   - Showing all projects in grid layout

4. **Education Page**
   - Showing education timeline

5. **Contact Page**
   - Showing contact form

6. **Sign Up Page**
   - Empty form ready for registration

7. **Sign In Page**
   - Empty form ready for login

8. **Admin Dashboard - Projects Tab**
   - Showing list of projects with Add/Edit/Delete buttons

9. **Admin Dashboard - Education Tab**
   - Showing list of education records

10. **Admin Dashboard - Contacts Tab**
    - Showing contact submissions

11. **MongoDB Database**
    - Open MongoDB Compass or use mongosh
    - Show collections: users, projects, educations, contacts
    - Screenshot showing data in collections

12. **GitHub Repository**
    - Screenshot of your GitHub repo showing files

### Step 13: Create Word Document with Screenshots

1. Create a new Word document
2. Title: "COMP229 Assignment 3 - Portfolio Application Screenshots"
3. Add your name and student ID
4. Insert each screenshot with a caption:
   - Screenshot 1: Home Page
   - Screenshot 2: About Page
   - etc.
5. Save as: `Assignment3_Screenshots_YourName.docx`

---

## Part 5: GitHub Setup and Push

### Step 14: Create GitHub Repository

1. Go to https://github.com
2. Sign in (or create account if needed)
3. Click "New" repository button
4. Repository name: `albaraa-portfolio` (or your preferred name)
5. Description: "Full Stack Portfolio Application - COMP229 Assignment 3"
6. Choose "Public"
7. **DO NOT** initialize with README (we already have one)
8. Click "Create repository"

### Step 15: Initialize Git and Push Code

1. Open terminal in your project root folder:
   ```bash
   cd "C:\Users\Albaraa\OneDrive\Desktop\Centennial College\Semester 1\Web Application Development\albaraa_portfolio"
   ```

2. Initialize Git repository:
   ```bash
   git init
   ```

3. Add all files:
   ```bash
   git add .
   ```

4. Commit files:
   ```bash
   git commit -m "Initial commit - Full stack portfolio application"
   ```

5. Add remote repository (replace with YOUR GitHub URL):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/albaraa-portfolio.git
   ```

6. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

7. Refresh your GitHub repository page - you should see all files!

### Step 16: Verify GitHub Repository

1. Check that all folders are visible:
   - backend/
   - frontend/
   - README.md
   - .gitignore

2. **IMPORTANT**: Verify `.env` file is NOT visible (it should be ignored)

3. Copy the GitHub repository URL (e.g., `https://github.com/YOUR_USERNAME/albaraa-portfolio`)

---

## Part 6: Creating Submission Package

### Step 17: Create ZIP Archive

1. **IMPORTANT**: Stop both servers (Ctrl+C in both terminal windows)

2. Navigate to your project folder in File Explorer

3. Select these folders/files:
   - backend folder
   - frontend folder
   - README.md
   - .gitignore
   - SETUP_AND_SUBMISSION_GUIDE.md

4. Right-click → "Send to" → "Compressed (zipped) folder"
   OR
   Right-click → "Compress to ZIP file" (depending on your system)

5. Name the file: `Assignment3_Albaraa_Portfolio.zip`

6. **Verify ZIP file**:
   - Open the ZIP to ensure all files are included
   - Check file size (should be around 50-100 MB with node_modules excluded)

---

## Part 7: Final Submission

### Step 18: Prepare Submission Materials

You should now have:
1. ✅ ZIP file: `Assignment3_Albaraa_Portfolio.zip`
2. ✅ Word document: `Assignment3_Screenshots_YourName.docx`
3. ✅ GitHub repository URL

### Step 19: Submit to Blackboard/Course Portal

1. Log in to your course portal
2. Navigate to Assignment 3 submission
3. Upload:
   - ZIP archive
   - Word document with screenshots
4. In the comments/text box, paste:
   ```
   GitHub Repository: [YOUR_GITHUB_URL]
   
   Admin Credentials:
   Email: admin@portfolio.com
   Password: admin123
   
   Application Features:
   - Full-stack MERN application
   - JWT Authentication
   - Role-based access control
   - CRUD operations for Projects, Education, and Contacts
   - Responsive design
   - All assignment requirements completed
   ```
5. Click Submit

---

## 🎉 Congratulations!

You have successfully:
- ✅ Set up and run a full-stack portfolio application
- ✅ Tested all features and CRUD operations
- ✅ Captured screenshots
- ✅ Pushed code to GitHub
- ✅ Created submission package
- ✅ Submitted assignment

---

## 🆘 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB service is running
- Check if port 27017 is available
- Try restarting MongoDB service

### Port Already in Use
- Backend (5000): Stop any other applications using port 5000
- Frontend (3000): Stop any other applications using port 3000
- Or change ports in `.env` and `vite.config.js`

### npm install Errors
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again
- Make sure you have stable internet connection

### Cannot Access Admin Dashboard
- Make sure you're logged in as admin
- Check credentials: admin@portfolio.com / admin123
- Clear browser cache and try again

### GitHub Push Errors
- Make sure you've created the repository on GitHub first
- Check your GitHub username in the remote URL
- Verify you're logged in to GitHub

---

## 📞 Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Refer to the troubleshooting section
3. Check README.md for additional information
4. Contact your instructor or TA

---

## 📚 Additional Resources

- React Documentation: https://react.dev/
- Express.js Guide: https://expressjs.com/
- MongoDB Manual: https://docs.mongodb.com/
- Git Documentation: https://git-scm.com/doc

---

**Good luck with your assignment! 🚀**

