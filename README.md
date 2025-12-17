# Digital Cafe Order Management System

A full-stack web application for managing cafe orders with real-time tracking. This project demonstrates skills in backend API development, frontend UI design, database management, and real-time features.

## Features

- **Customer Interface**: Browse menu, add items to cart, place orders.
- **Order Tracking**: Real-time status updates with visual progress.
- **Admin Dashboard**: Manage orders, update status, view queue.
- **Responsive Design**: Works on desktop and mobile devices.
- **Secure Authentication**: JWT-based admin login.

## Tech Stack

- **Backend**: Node.js, Express.js, Prisma ORM, SQLite.
- **Frontend**: React, Material-UI, React Router.
- **Database**: SQLite (for easy setup).
- **Authentication**: JWT tokens.

## Quick Start

### Prerequisites

- **Node.js** v18 or higher
- **npm** package manager

### Setup

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd Digital-cafe-master
   ```

2. Run the setup script:
   - **Windows**: `setup.bat`
   - **Linux/Mac**: `./setup.sh`

3. Access the application:
   - Customer View: [http://localhost:3000](http://localhost:3000)
   - Admin Login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

   **Admin Credentials:**
   - Username: `admin`
   - Password: `admin123`

## Project Structure

The project is organized as follows:

```
Digital-cafe-master/
├── backend/                # Backend server code
│   ├── prisma/             # Prisma schema and migrations
│   ├── src/                # Source code for API and middleware
│   ├── package.json        # Backend dependencies
│   └── seed.js             # Database seeding script
├── frontend/               # Frontend React application
│   ├── src/                # React components and pages
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── setup.bat               # Windows setup script
├── setup.sh                # Linux/Mac setup script
└── README.md               # Project documentation
```

## Project Highlights

- **Real-time Updates**: Automatic refresh of order status.
- **Professional UI**: Built with Material-UI.
- **Secure**: JWT authentication and password hashing.
- **Responsive**: Optimized for all devices.

## Objective

The Digital Cafe Order Management System is a full-stack web application designed to streamline cafe operations. It allows customers to place orders and track their status in real-time while providing administrators with tools to manage orders efficiently. This project showcases expertise in backend development, frontend design, database management, and real-time features.

## System Workflow

1. Customers browse the menu and add items to their cart.
2. Orders are placed and stored in the database.
3. Real-time updates are provided to customers as the order progresses.
4. Administrators manage orders through a secure dashboard.
5. The system ensures responsive design and secure authentication.

## Technologies Used

- **Backend**: Node.js, Express.js, Prisma ORM, SQLite.
- **Frontend**: React, Material-UI, React Router.
- **Database**: SQLite for easy setup.
- **Authentication**: JWT tokens for secure access.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Digital-cafe-master
   ```

2. Run the setup script:
   - **Windows**: `setup.bat`
   - **Linux/Mac**: `./setup.sh`

3. Start the servers:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm run dev`

4. Access the application:
   - Customer View: [http://localhost:3000](http://localhost:3000)
   - Admin Login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

   **Admin Credentials:**
   - Username: `admin`
   - Password: `admin123`

## About

This project was developed to demonstrate full-stack development skills, including real-time features, responsive design, and secure authentication. It is optimized for both desktop and mobile devices and is suitable for small cafes or as a learning project.

## License

MIT License - Feel free to use this project for learning and development.
