# Assignment 4 - Testing and Deployment
## Portfolio Application Submission

**Student Name:** Albaraa  
**Student ID:** [Your Student ID]  
**Course:** COMP229 - Web Application Development  
**Assignment:** Assignment 4 - Testing and Deployment  
**Institution:** Centennial College  
**Date:** December 2024

---

## Deployed Application

**Live URL:** [Insert your deployed URL here]  
Example: `https://your-portfolio.onrender.com`

**GitHub Repository:** [Insert your GitHub URL here]  
Example: `https://github.com/yourusername/albaraa_portfolio`

---

## PART I - TESTING

### A. Unit Testing with Vitest

**Description:**  
Implemented unit testing using Vitest and React Testing Library. Created tests for key components including Navbar and Footer.

**Test Results:**

[INSERT SCREENSHOT: Terminal output showing unit test results]

**Screenshot shows:**
- All 6 tests passing
- 2 test files (Navbar.test.jsx, Footer.test.jsx)
- Test execution time
- Coverage summary

**Test Coverage:**
- Navbar Component: 4 tests
  - Renders navigation links
  - Shows Sign In/Sign Up when not logged in
  - Shows username and Sign Out when logged in
  - Shows Dashboard link for admin users
- Footer Component: 2 tests
  - Renders footer content
  - Displays copyright text

**Command Used:**
```bash
cd frontend
npm run test:run
```

---

### B. E2E Testing with Cypress

**Description:**  
Implemented end-to-end testing using Cypress to test complete user workflows including navigation, form submission, and authentication.

**Cypress Test Runner:**

[INSERT SCREENSHOT: Cypress Test Runner interface showing all test files]

**Screenshot shows:**
- Cypress Test Runner window
- List of test files (navigation.cy.js, contact-form.cy.js, authentication.cy.js)
- Browser selection

**Test Execution Results:**

[INSERT SCREENSHOT: Cypress test results or terminal output]

**Screenshot shows:**
- All tests passing
- Test execution details
- Time taken for each test

**Test Coverage:**
1. **Navigation Tests** (navigation.cy.js)
   - Home page loads correctly
   - Navigation to About page
   - Navigation to Projects page
   - Navigation to Education page
   - Navigation to Contact page

2. **Contact Form Tests** (contact-form.cy.js)
   - Form displays correctly
   - Form submission works
   - Validation errors appear for empty fields

3. **Authentication Tests** (authentication.cy.js)
   - Sign in page navigation
   - Sign up page navigation
   - Admin login functionality
   - Dashboard access for admin
   - Sign out functionality

**Cypress Video Recording:**

[INSERT SCREENSHOT: Thumbnail of Cypress video or video file listing]

**Commands Used:**
```bash
# Interactive mode
npm run cypress:open

# Headless mode
npm run cypress:run
```

---

## PART II - PERFORMANCE OPTIMIZATION

**Description:**  
Implemented various performance optimizations for both frontend and backend to improve application speed and efficiency.

**Build Output:**

[INSERT SCREENSHOT: Terminal output from npm run build showing optimized chunks]

**Screenshot shows:**
- Vite build output
- Chunk sizes
- Vendor chunks separated (react-vendor, icons)
- Minified files
- Total build size

**Optimizations Implemented:**

### Frontend Optimizations:
1. **Code Splitting**
   - Vendor chunks separated for better caching
   - React libraries in separate chunk
   - Icons in separate chunk

2. **Minification**
   - Terser minification enabled
   - Console.log statements removed in production
   - Optimized chunk sizes

3. **Build Configuration**
   - Chunk size warnings configured
   - Production-ready build settings

### Backend Optimizations:
1. **Compression Middleware**
   - Response compression enabled
   - Reduced payload sizes

2. **Request Limits**
   - Configured request size limits
   - Improved security

**Performance Metrics:**
- Build time: [Insert time from screenshot]
- Total bundle size: [Insert size from screenshot]
- Largest chunk: [Insert size from screenshot]

**Command Used:**
```bash
cd frontend
npm run build
```

---

## PART III - DEPLOYMENT

**Description:**  
Deployed the full-stack portfolio application to cloud hosting services. Backend deployed to Render, frontend deployed to Render/Vercel, and database hosted on MongoDB Atlas.

### Application Before Deployment

[INSERT SCREENSHOT: Local application running (home page)]

**Screenshot shows:**
- Application running on localhost:3000
- Home page with all content
- Navigation working

### Deployment Platform Dashboard

[INSERT SCREENSHOT: Render/Vercel dashboard showing deployed services]

**Screenshot shows:**
- Deployment platform dashboard
- Both frontend and backend services
- Deployment status (active/running)
- Service URLs

### Deployed Application

[INSERT SCREENSHOT: Deployed application home page]

**Screenshot shows:**
- Live application URL in browser
- Home page fully functional
- All styling and content loaded

[INSERT SCREENSHOT: Deployed admin dashboard]

**Screenshot shows:**
- Admin dashboard accessible
- Logged in as admin
- Dashboard features working

**Deployment Details:**

**Backend:**
- Platform: Render
- URL: [Your backend URL]
- Database: MongoDB Atlas
- Status: ✅ Running

**Frontend:**
- Platform: Render/Vercel
- URL: [Your frontend URL]
- Build: Optimized production build
- Status: ✅ Running

**Database:**
- Platform: MongoDB Atlas
- Connection: Cloud-based
- Status: ✅ Connected

**Environment Variables Configured:**
- NODE_ENV=production
- MONGODB_URI=[MongoDB Atlas connection string]
- JWT_SECRET=[Secret key]
- PORT=5000

---

## PART IV - CI/CD (Continuous Integration/Continuous Deployment)

**Description:**  
Implemented CI/CD pipeline using GitHub Actions to automatically run tests and build the application on every push to the repository.

### Application Before Update

[INSERT SCREENSHOT: Application page before making changes]

**Screenshot shows:**
- Specific page before content update
- Original content visible

### GitHub Actions Workflow

[INSERT SCREENSHOT: GitHub Actions workflow running]

**Screenshot shows:**
- GitHub Actions tab
- Workflow in progress
- Jobs running (backend, frontend, deploy-notification)

[INSERT SCREENSHOT: GitHub Actions workflow completed successfully]

**Screenshot shows:**
- All jobs completed successfully (green checkmarks)
- Test results
- Build artifacts generated

### Application After Update

[INSERT SCREENSHOT: Application page after update deployed]

**Screenshot shows:**
- Same page with new content
- Changes visible
- Successfully deployed

### GitHub Commit History

[INSERT SCREENSHOT: GitHub showing branch creation and merge]

**Screenshot shows:**
- Feature branch created
- Commits made
- Pull request merged to main
- Automatic deployment triggered

**CI/CD Workflow Details:**

**Workflow File:** `.github/workflows/ci-cd.yml`

**Workflow Steps:**
1. **Backend Job:**
   - Checkout code
   - Setup Node.js
   - Install dependencies
   - Run backend checks

2. **Frontend Job:**
   - Checkout code
   - Setup Node.js
   - Install dependencies
   - Run unit tests
   - Build application
   - Upload build artifacts

3. **Deploy Notification:**
   - Confirms all tests passed
   - Ready for deployment

**Demonstration Steps:**
1. Created feature branch: `feature/cicd-demo`
2. Made content update to About page
3. Committed and pushed changes
4. Created pull request
5. GitHub Actions ran automatically
6. Tests passed successfully
7. Merged to main branch
8. Application auto-deployed with changes

**Commands Used:**
```bash
git checkout -b feature/cicd-demo
git add .
git commit -m "Add new content to demonstrate CI/CD"
git push origin feature/cicd-demo
```

---

## Summary

### Assignment Requirements Completed

✅ **PART I - Testing**
- Unit testing implemented with Vitest
- E2E testing implemented with Cypress
- All tests passing
- Screenshots provided

✅ **PART II - Performance Optimization**
- Frontend build optimized
- Backend compression enabled
- Performance improvements documented
- Build output screenshot provided

✅ **PART III - Deployment**
- Application deployed to cloud (Render/Vercel)
- MongoDB Atlas configured
- Deployment screenshots provided
- Live URL accessible

✅ **PART IV - CI/CD**
- GitHub Actions workflow configured
- Automated testing on push
- CI/CD demonstration completed
- Before/after screenshots provided

### Links

**Deployed Application:** [Your deployed URL]  
**GitHub Repository:** [Your GitHub URL]

### Technologies Used

- **Frontend:** React, Vite, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, JWT
- **Testing:** Vitest, React Testing Library, Cypress
- **Deployment:** Render/Vercel, MongoDB Atlas
- **CI/CD:** GitHub Actions
- **Performance:** Compression, Code Splitting, Minification

---

## Conclusion

This assignment successfully demonstrates a complete full-stack application with comprehensive testing, performance optimization, cloud deployment, and automated CI/CD pipeline. All features are functional and accessible via the deployed URL.

---

**End of Document**

