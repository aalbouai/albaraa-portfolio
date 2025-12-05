# Testing Quick Reference

## 🧪 Running Tests

### Unit Tests (Vitest)

```bash
cd frontend
npm run test:run    # Run all tests once
```

**Expected Output:**
```
✓ src/components/__tests__/Footer.test.jsx (2 tests)
✓ src/components/__tests__/Navbar.test.jsx (4 tests)

Test Files  2 passed (2)
Tests  6 passed (6)
```

---

### E2E Tests (Cypress)

**Step 1: Start Servers**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

**Step 2: Run Cypress**

Terminal 3 - Interactive Mode:
```bash
cd frontend
npm run cypress:open
```
- Click "E2E Testing"
- Choose browser (Chrome)
- Click on test files to run

Terminal 3 - Headless Mode:
```bash
cd frontend
npm run cypress:run
```

**Test Files:**
- `navigation.cy.js` - Tests navigation between pages
- `contact-form.cy.js` - Tests contact form submission
- `authentication.cy.js` - Tests login/logout flow

---

## 📸 Screenshots Needed

### For Unit Tests
1. Run `npm run test:run` in frontend directory
2. Screenshot the terminal output
3. Save as: `unit-test-results.png`

### For E2E Tests
1. Run `npm run cypress:open`
2. Screenshot the Cypress Test Runner
3. Run tests and screenshot results
4. Save as: `cypress-test-runner.png` and `cypress-results.png`

OR

1. Run `npm run cypress:run`
2. Screenshot terminal output
3. Videos saved in `frontend/cypress/videos/`
4. Save as: `cypress-headless-results.png`

---

## 🚀 Build and Performance

```bash
cd frontend
npm run build
```

Screenshot the build output showing:
- Chunk sizes
- Vendor chunks
- Optimized build
- Save as: `build-output.png`

---

## ✅ Quick Checklist

Before taking screenshots:

- [ ] Backend server is running (port 5000)
- [ ] Frontend server is running (port 3000)
- [ ] Database is seeded with admin user
- [ ] All dependencies are installed
- [ ] Tests pass locally

---

## 🆘 Troubleshooting

**Tests fail?**
- Make sure you're in the correct directory
- Run `npm install` in both backend and frontend
- Check that servers are running for E2E tests

**Cypress can't find elements?**
- Verify frontend is running on port 3000
- Check that admin user exists in database
- Run `cd backend && npm run seed` to reset database

**Build fails?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for any missing dependencies

