import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Education from './models/Education.js';
import Project from './models/Project.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Clear existing data
    await User.deleteMany({});
    await Education.deleteMany({});
    await Project.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const admin = await User.create({
      username: 'admin',
      email: 'admin@portfolio.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('Admin user created:', admin.email);

    // Create sample education records
    const educationRecords = await Education.insertMany([
      {
        institution: 'Centennial College',
        degree: 'Advanced Diploma',
        fieldOfStudy: 'Web Application Development',
        startDate: new Date('2024-01-01'),
        current: true,
        description: 'Comprehensive program covering full-stack web development, including React, Node.js, Express, MongoDB, and modern web technologies.',
        grade: '4.0 GPA'
      },
      {
        institution: 'St. Lawrence Secondary School',
        degree: 'High School Diploma',
        fieldOfStudy: 'General Studies',
        startDate: new Date('2020-09-01'),
        endDate: new Date('2024-06-30'),
        current: false,
        description: 'Completed high school education with focus on mathematics, sciences, and computer studies.',
        grade: 'Honours'
      }
    ]);
    console.log('Education records created:', educationRecords.length);

    // Create sample projects
    const projects = await Project.insertMany([
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with React, Node.js, Express, and MongoDB.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
        projectUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/albaraa/ecommerce-platform',
        startDate: new Date('2024-09-01'),
        endDate: new Date('2024-11-30'),
        current: false,
        featured: true
      },
      {
        title: 'Task Management System',
        description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking. Implements RESTful API design and responsive UI.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Material-UI'],
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        projectUrl: 'https://example-taskmanager.com',
        githubUrl: 'https://github.com/albaraa/task-manager',
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-08-31'),
        current: false,
        featured: true
      },
      {
        title: 'Weather Dashboard',
        description: 'A weather forecasting application that displays current weather and 7-day forecast using external weather API. Features location search, favorites, and responsive design.',
        technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
        imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800',
        projectUrl: 'https://example-weather.com',
        githubUrl: 'https://github.com/albaraa/weather-dashboard',
        startDate: new Date('2024-04-01'),
        endDate: new Date('2024-05-31'),
        current: false,
        featured: false
      },
      {
        title: 'Blog Platform',
        description: 'A modern blogging platform with markdown support, user authentication, comments, and social sharing. Includes admin dashboard for content management.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Markdown', 'JWT'],
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
        projectUrl: 'https://example-blog.com',
        githubUrl: 'https://github.com/albaraa/blog-platform',
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-03-31'),
        current: false,
        featured: false
      },
      {
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing projects, skills, and experience. Features admin dashboard for content management, contact form, and responsive design.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vite'],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        githubUrl: 'https://github.com/albaraa/portfolio',
        startDate: new Date('2024-11-01'),
        current: true,
        featured: true
      }
    ]);
    console.log('Projects created:', projects.length);

    console.log('\n=== Seed Data Summary ===');
    console.log('Admin Credentials:');
    console.log('Email: admin@portfolio.com');
    console.log('Password: admin123');
    console.log('\nEducation Records:', educationRecords.length);
    console.log('Projects:', projects.length);
    console.log('========================\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

