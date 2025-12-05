# Testing and Submission Guide - Assignment 4

## Overview

This guide covers all testing requirements and submission steps for Assignment 4.

---

## PART I - Testing

### A. Unit Testing with Vitest

#### Running Unit Tests

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Run tests**:
   ```bash
   npm run test:run
   ```

3. **Run tests in watch mode** (for development):
   ```bash
   npm test
   ```

4. **Run tests with UI**:
   ```bash
   npm run test:ui
   ```

#### What's Being Tested

- **Navbar Component**: Navigation links, authentication states, admin dashboard access
- **Footer Component**: Copyright information and rendering

#### Taking Screenshots

1. Run `npm run test:run` in the frontend directory
2. Take a screenshot of the terminal showing test results
3. Save as: `unit-test-results.png`

**Expected Output**:
```
✓ src/components/__tests__/Footer.test.jsx (2 tests)
✓ src/components/__tests__/Navbar.test.jsx (4 tests)

Test Files  2 passed (2)
Tests  6 passed (6)
```

---

### B. E2E Testing with Cypress

#### Prerequisites

Make sure both servers are running:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

#### Running E2E Tests

1. **Open Cypress Test Runner** (Interactive):
   ```bash
   cd frontend
   npm run cypress:open
   ```
   - Click "E2E Testing"
   - Choose a browser (Chrome recommended)
   - Click on test files to run them
   - Watch tests execute in real-time

2. **Run Cypress in Headless Mode** (Command Line):
   ```bash
   cd frontend
   npm run cypress:run
   ```

#### What's Being Tested

1. **Navigation Tests** (`navigation.cy.js`):
   - Home page loads
   - Navigation to About, Projects, Education, Contact pages

2. **Contact Form Tests** (`contact-form.cy.js`):
   - Form displays correctly
   - Form submission works
   - Validation errors appear

3. **Authentication Tests** (`authentication.cy.js`):
   - Sign in page navigation
   - Admin login
   - Dashboard access
   - Sign out functionality

#### Taking Screenshots and Recording

**For Interactive Mode**:
1. Run `npm run cypress:open`
2. Take screenshots of:
   - Cypress Test Runner showing all tests
   - Individual test execution
   - Test results summary

**For Headless Mode**:
1. Run `npm run cypress:run`
2. Videos are automatically saved in `frontend/cypress/videos/`
3. Screenshots are saved in `frontend/cypress/screenshots/`
4. Take a screenshot of the terminal output showing test results

**Save as**:
- `cypress-test-runner.png` - Test runner interface
- `cypress-test-results.png` - Terminal output
- Include video files in submission

---

## PART II - Performance Optimization

### What Was Optimized

1. **Frontend Optimizations**:
   - Vite build configuration with code splitting
   - Vendor chunk separation for better caching
   - Minification with Terser
   - Console.log removal in production
   - Chunk size optimization

2. **Backend Optimizations**:
   - Compression middleware for response compression
   - Request size limits
   - Production error handling

### Checking Performance

1. **Build the frontend**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Check build output**:
   - Look for chunk sizes in terminal
   - Verify vendor chunks are separated
   - Take screenshot of build output

3. **Test production build**:
   ```bash
   npm run preview
   ```

#### Taking Screenshots

1. Screenshot of `npm run build` output showing optimized chunks
2. Save as: `performance-build-output.png`

---

## PART III - Deployment

### Deployment Steps

Follow the `DEPLOYMENT_GUIDE.md` for detailed instructions.

### Quick Summary

1. **Deploy Backend to Render**:
   - Create Web Service
   - Connect GitHub repo
   - Set environment variables
   - Deploy

2. **Deploy Frontend to Render/Vercel**:
   - Create Static Site
   - Connect GitHub repo
   - Set VITE_API_URL
   - Deploy

### Taking Screenshots

1. **Before Deployment**:
   - Screenshot of local application running
   - Save as: `app-before-deployment.png`

2. **Deployment Dashboard**:
   - Screenshot of Render/Vercel dashboard showing services
   - Save as: `deployment-dashboard.png`

3. **After Deployment**:
   - Screenshot of deployed application (home page)
   - Screenshot of deployed admin dashboard
   - Save as: `app-after-deployment.png` and `deployed-dashboard.png`

4. **Deployed URL**:
   - Note your deployed URL: `https://your-app.onrender.com`

---

## PART IV - CI/CD

### GitHub Actions Workflow

The CI/CD pipeline is configured in `.github/workflows/ci-cd.yml`

### Demonstrating CI/CD

1. **Make a Change**:
   - Edit `frontend/src/pages/About.jsx`
   - Add a new paragraph or update existing content
   - Example:
     ```jsx
     <p>This content was added to demonstrate CI/CD deployment.</p>
     ```

2. **Create a Branch**:
   ```bash
   git checkout -b feature/cicd-demo
   git add .
   git commit -m "Add new content to demonstrate CI/CD"
   git push origin feature/cicd-demo
   ```

3. **Create Pull Request**:
   - Go to GitHub repository
   - Click "Pull requests" → "New pull request"
   - Select your branch
   - Create pull request
   - Watch GitHub Actions run tests

4. **Merge to Main**:
   - After tests pass, merge the pull request
   - Watch automatic deployment trigger

### Taking Screenshots

1. **Before Update**:
   - Screenshot of About page before changes
   - Save as: `app-before-update.png`

2. **GitHub Actions**:
   - Screenshot of GitHub Actions running
   - Screenshot of successful workflow
   - Save as: `github-actions-running.png` and `github-actions-success.png`

3. **After Update**:
   - Screenshot of deployed app with new content
   - Save as: `app-after-update.png`

4. **GitHub Commits**:
   - Screenshot showing branch creation and merge
   - Save as: `github-commits.png`

---

## Submission Checklist

### Required Files

- [ ] Link to deployed application
- [ ] Link to GitHub repository
- [ ] Word document with all screenshots

### Screenshots to Include in Word Document

#### Testing Section
1. Unit test results (`npm run test:run`)
2. Cypress test runner interface
3. Cypress test results
4. Sample Cypress video thumbnail

#### Performance Section
5. Build output showing optimizations
6. Performance metrics (optional)

#### Deployment Section
7. Local application (before deployment)
8. Deployment platform dashboard
9. Deployed application (home page)
10. Deployed admin dashboard

#### CI/CD Section
11. Application before update
12. GitHub Actions workflow running
13. GitHub Actions success
14. Application after update
15. GitHub branch and merge history

### Word Document Structure

```
Assignment 4 - Testing and Deployment
Student Name: Albaraa
Course: COMP229 - Web Application Development

PART I - TESTING
1. Unit Testing
   [Screenshot of unit test results]
   Description: All 6 unit tests passed successfully.

2. E2E Testing
   [Screenshot of Cypress test runner]
   [Screenshot of test results]
   Description: All E2E tests passed, covering navigation, forms, and authentication.

PART II - PERFORMANCE OPTIMIZATION
   [Screenshot of build output]
   Description: Implemented code splitting, compression, and minification.

PART III - DEPLOYMENT
   Deployed URL: https://your-app.onrender.com
   [Screenshots of deployment process and deployed app]

PART IV - CI/CD
   [Screenshots showing before/after update and GitHub Actions]
   Description: Demonstrated automatic deployment on merge to main branch.

GitHub Repository: https://github.com/yourusername/albaraa_portfolio
```

---

## Tips for Success

1. **Test Everything Locally First**: Make sure all tests pass before deploying
2. **Take Clear Screenshots**: Use full-screen captures, ensure text is readable
3. **Document Issues**: If something doesn't work, document what you tried
4. **Keep URLs Handy**: Save your deployed URLs immediately
5. **Test Deployed App**: Verify all features work after deployment

---

## Common Issues and Solutions

### Unit Tests Fail
- Make sure you're in the `frontend` directory
- Run `npm install` to ensure all dependencies are installed
- Check that test files are in the correct location

### Cypress Tests Fail
- Ensure both backend and frontend servers are running
- Check that ports 3000 and 5000 are not blocked
- Verify database is seeded with admin user

### Deployment Fails
- Check environment variables are set correctly
- Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Review deployment logs for specific errors

### CI/CD Not Triggering
- Ensure `.github/workflows/ci-cd.yml` is in the repository
- Check that you're pushing to main/master branch
- Verify GitHub Actions is enabled in repository settings

---

## Support

If you encounter issues:
1. Review error messages carefully
2. Check the relevant guide (DEPLOYMENT_GUIDE.md, etc.)
3. Test locally to isolate the problem
4. Contact your instructor or TA with specific error details

