# Portfolio Application - Full Stack Web Development

A modern, full-stack portfolio application built with React, Node.js, Express, and MongoDB. Features user authentication, role-based access control, and complete CRUD operations for managing portfolio content.

## 🎓 Assignment Information

**Course:** COMP229 - Web Application Development
**Assignment:** Assignment 4 - Testing and Deployment
**Student:** Albaraa
**Institution:** Centennial College

## 📦 Assignment 4 Features

### ✅ PART I - Testing
- **Unit Testing**: Vitest with React Testing Library
  - Navbar component tests
  - Footer component tests
  - 6 passing tests
- **E2E Testing**: Cypress
  - Navigation flow tests
  - Contact form tests
  - Authentication flow tests
  - Video recording enabled

### ✅ PART II - Performance Optimization
- Frontend build optimizations (code splitting, minification)
- Backend compression middleware
- Vendor chunk separation for better caching
- Production-ready configuration

### ✅ PART III - Cloud Deployment
- MongoDB Atlas (cloud database) ✓
- Deployment configurations for Render/Vercel
- Environment variable management
- Production build setup

### ✅ PART IV - CI/CD
- GitHub Actions workflow
- Automated testing on push/PR
- Continuous deployment ready
- Build artifact generation

## ✨ Features

### Frontend
- Modern, responsive UI built with React and Vite
- Client-side routing with React Router
- State management using React Context API
- User authentication (Sign Up / Sign In)
- Public pages: Home, About, Projects, Education, Contact
- Admin Dashboard for content management
- Form validation and error handling
- Mobile-responsive design

### Backend
- RESTful API built with Node.js and Express
- MongoDB database with Mongoose ODM
- JWT-based authentication
- Role-based access control (User and Admin roles)
- Protected routes and middleware
- CRUD operations for:
  - Projects
  - Education records
  - Contact form submissions
  - User management

### Security
- Password hashing with bcryptjs
- JWT token authentication
- Protected admin routes
- Input validation
- CORS enabled

## 🛠️ Technologies Used

### Frontend
- React 18
- React Router DOM
- Axios
- React Icons
- Vite
- **Vitest** (Unit Testing)
- **React Testing Library** (Component Testing)
- **Cypress** (E2E Testing)

### Backend
- Node.js
- Express.js
- MongoDB (Atlas - Cloud)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS
- **Compression** (Performance)

### DevOps & Testing
- **GitHub Actions** (CI/CD)
- **Vitest** (Unit Testing)
- **Cypress** (E2E Testing)
- **Render/Vercel** (Deployment)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd albaraa_portfolio
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (already created, but verify settings)
# Make sure MongoDB is running on your system

# Seed the database with admin user and sample data
node seed.js

# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will run on `http://localhost:3000`

## 👤 Default Admin Credentials

After running the seed script, use these credentials to sign in as admin:

- **Email:** admin@portfolio.com
- **Password:** admin123

## 📁 Project Structure

```
albaraa_portfolio/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── contactController.js
│   │   ├── educationController.js
│   │   └── projectController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   └── Project.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── educationRoutes.js
│   │   └── projectRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── seed.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminRoute.jsx
│   │   │   ├── ContactManager.jsx
│   │   │   ├── EducationManager.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Manager.css
│   │   │   ├── Navbar.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   └── ProjectManager.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Sign in user
- `GET /api/auth/signout` - Sign out user
- `GET /api/auth/profile` - Get user profile (Protected)

### Projects
- `GET /api/projects` - Get all projects (Public)
- `GET /api/projects/:id` - Get single project (Public)
- `POST /api/projects` - Create project (Admin only)
- `PUT /api/projects/:id` - Update project (Admin only)
- `DELETE /api/projects/:id` - Delete project (Admin only)

### Education
- `GET /api/education` - Get all education records (Public)
- `GET /api/education/:id` - Get single education record (Public)
- `POST /api/education` - Create education record (Admin only)
- `PUT /api/education/:id` - Update education record (Admin only)
- `DELETE /api/education/:id` - Delete education record (Admin only)

### Contacts
- `GET /api/contacts` - Get all contacts (Admin only)
- `GET /api/contacts/:id` - Get single contact (Admin only)
- `POST /api/contacts` - Create contact (Public)
- `PUT /api/contacts/:id` - Update contact status (Admin only)
- `DELETE /api/contacts/:id` - Delete contact (Admin only)

## 👥 User Roles

### User Role
- Can view all public pages
- Can submit contact form
- Can view projects and education
- Cannot access admin dashboard

### Admin Role
- All user permissions
- Access to admin dashboard
- Can create, read, update, and delete:
  - Projects
  - Education records
  - Contact submissions

## 🎨 Features Implemented

✅ Backend Authentication with JWT  
✅ Protected Routes and Middleware  
✅ User and Admin Roles  
✅ CRUD Operations for all entities  
✅ React Forms with State Management  
✅ Frontend-Backend API Integration  
✅ Responsive Design  
✅ Error Handling  
✅ Form Validation  
✅ Modern UI/UX  

## 📝 Assignment Requirements Checklist

### Part I - Backend Authentication
- ✅ Authentication routes (signin, signout)
- ✅ JWT token implementation
- ✅ Protected routes middleware
- ✅ User roles (admin, user)

### Part II - Frontend Integration
- ✅ SignUp form with state management
- ✅ SignIn form with state management
- ✅ Education form with state management
- ✅ Project form with state management
- ✅ Contact form with state management
- ✅ API consumption from backend
- ✅ CRUD operations for all entities
- ✅ Role-based access control
- ✅ Admin credentials in database

### Part III - Full Stack Application
- ✅ Seamless frontend-backend communication
- ✅ Data persistence in MongoDB
- ✅ Error-free application
- ✅ Code pushed to GitHub

### Part IV - Testing and Deployment (Assignment 4)
- ✅ Unit testing with Vitest
- ✅ E2E testing with Cypress
- ✅ Performance optimizations
- ✅ Cloud deployment configuration
- ✅ CI/CD with GitHub Actions
- ✅ MongoDB Atlas (cloud database)

## 🔧 Environment Variables

Backend `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=your_jwt_secret_key_change_this_in_production_2024
NODE_ENV=development
```

## 📸 Screenshots Guide

For assignment submission, take screenshots of:
1. Home page
2. About page
3. Projects page
4. Education page
5. Contact page
6. Sign Up page
7. Sign In page
8. Admin Dashboard - Projects tab
9. Admin Dashboard - Education tab
10. Admin Dashboard - Contacts tab
11. MongoDB database showing collections
12. GitHub repository

## 🧪 Testing

### Unit Tests (Vitest)

Run unit tests for React components:

```bash
cd frontend
npm run test        # Run in watch mode
npm run test:run    # Run once
npm run test:ui     # Run with UI
```

**Test Coverage:**
- Navbar component (4 tests)
- Footer component (2 tests)

### E2E Tests (Cypress)

**Prerequisites:** Both backend and frontend servers must be running.

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - Cypress
cd frontend
npm run cypress:open    # Interactive mode
npm run cypress:run     # Headless mode
```

**Test Suites:**
- Navigation tests
- Contact form tests
- Authentication flow tests

## 🚀 Deployment

### Cloud Deployment

This application is configured for deployment to:
- **Backend**: Render, Railway, or Heroku
- **Frontend**: Render, Vercel, or Netlify
- **Database**: MongoDB Atlas (already configured)

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Quick Deploy to Render

1. Push code to GitHub
2. Create account on [Render.com](https://render.com)
3. Create Web Service for backend
4. Create Static Site for frontend
5. Set environment variables
6. Deploy!

### Local Development
Both servers must be running:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

## 🔄 CI/CD

GitHub Actions workflow is configured to:
- Run unit tests on every push
- Build frontend and backend
- Generate build artifacts
- Ready for automatic deployment

Workflow file: `.github/workflows/ci-cd.yml`

## 📄 License

This project is created for educational purposes as part of COMP229 course at Centennial College.

## 👨‍💻 Author

**Albaraa**  
Web Application Development  
Centennial College

## 🙏 Acknowledgments

- Centennial College
- COMP229 Course Instructors
- React Documentation
- Express.js Documentation
- MongoDB Documentation

