# Portfolio Application - Full Stack Web Development

A modern, full-stack portfolio application built with React, Node.js, Express, and MongoDB. Features user authentication, role-based access control, and complete CRUD operations for managing portfolio content.

## 🎓 Assignment Information

**Course:** COMP229 - Web Application Development  
**Assignment:** Assignment 3 - Portfolio Application  
**Student:** Albaraa  
**Institution:** Centennial College

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

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

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

## 🚀 Deployment

### Local Development
Both servers must be running:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

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

