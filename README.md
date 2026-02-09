# Courses Application

A modern, full-featured React application for managing music courses with complete authentication, course management, and author administration capabilities. Built with React 19, TypeScript, and Material UI.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)
![Material UI](https://img.shields.io/badge/MUI-7.3.7-007FFF?style=flat-square&logo=mui)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat-square&logo=tailwindcss)

---

## ✨ Features

### 🔐 Authentication System
- **Secure Login Page** with professional form validation
- **Username Requirements**: 3-20 characters required
- **Password Requirements**: 8-20 characters required
- **Token-based Authentication** using Dummy JSON Auth API
- **Auto-redirect** to courses page when authentication token exists
- **Logout Functionality** with complete token removal and session cleanup
- **Protected Routes** to prevent unauthorized access

### 📚 Courses Management
- **View All Courses** in a responsive, modern grid layout
- **Real-time Search** by course title or description content
- **Add New Courses** through an intuitive modal form interface
- **Edit Existing Courses** with full form pre-population
- **Delete Courses** with confirmation dialogs for safety
- **Detailed Course View** with comprehensive course information
- **Smart Duration Formatting** (hh:mm format for readability)

### 👥 Authors Management
- **Browse All Authors** in a clean, organized list
- **Add New Authors** with simple creation workflow
- **Course Author Assignment** - link authors to courses
- **Author Removal** from courses with easy management
- **Authors List Integration** in course creation/editing forms

### 🌐 API Integration
- **Authentication**: Dummy JSON Auth API (`https://dummyjson.com/auth`)
- **Courses Data**: MockAPI Platform (`https://698641a06964f10bf255e850.mockapi.io/api/courses`)
- **Authors Data**: MockAPI Platform (`https://698641a06964f10bf255e850.mockapi.io/api/authors`)
- **RESTful Architecture** with consistent response handling
- **Error Handling** with user-friendly feedback messages

### 🎨 Modern UI/UX
- **Responsive Design** with breakpoints at 480px, 800px, and 1280px
- **Material UI Components** for consistent design language
- **Beautiful Gradient Backgrounds** throughout the application
- **Smooth Animations** and transitions for polished interactions
- **Loading States** with visual feedback during data fetching
- **Comprehensive Error Handling** with user-friendly messages
- **Empty States** with helpful guidance when no data exists
- **Intuitive Icons** from Lucide React library

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React | ^19.2.0 |
| **Language** | TypeScript | ~5.9.3 |
| **Build Tool** | Vite | ^7.2.4 |
| **UI Library** | Material UI (MUI) | ^7.3.7 |
| **Icons** | Lucide React | ^0.563.0 |
| **Routing** | React Router DOM | ^7.13.0 |
| **Styling** | Tailwind CSS | ^4.1.18 |
| **CSS Preprocessor** | PostCSS | ^8.5.6 |
| **Linting** | ESLint | ^9.39.1 |
| **CSS Framework** | Autoprefixer | ^10.4.24 |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** version 18 or higher
- **npm** (comes with Node.js) or **yarn** as your package manager

### Installation

Clone the repository and install dependencies:

```bash
# Navigate to project directory
cd react-task-1

# Install all dependencies
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production deployment:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

---

## 📁 Project Structure

```
react-task-1/
├── public/                      # Static assets
│   └── logo.png                 # Application logo
├── src/
│   ├── assets/                  # Application assets
│   │   └── logo.png             # Logo image file
│   ├── components/              # React components
│   │   ├── CourseForm/          # Course creation/editing form
│   │   │   └── CourseForm.tsx   # Main form component
│   │   ├── CourseInfo/          # Course details view
│   │   │   ├── AuthorsList.tsx      # Authors display component
│   │   │   ├── BackButton.tsx       # Navigation back button
│   │   │   ├── CourseInfo.tsx       # Main course info container
│   │   │   ├── CourseInfoCard.tsx   # Card wrapper for course info
│   │   │   ├── CourseInfoTitle.tsx  # Title component
│   │   │   ├── CreationDate.tsx     # Date display component
│   │   │   ├── Description.tsx       # Course description
│   │   │   ├── Duration.tsx          # Duration display
│   │   │   └── Id.tsx                # Course ID component
│   │   ├── Courses/              # Courses main components
│   │   │   ├── AddNewCourseButton.tsx  # Add course button
│   │   │   ├── Courses.tsx           # Courses page container
│   │   │   ├── CoursesList/           # Course list display
│   │   │   │   ├── CoursesList.tsx    # List wrapper
│   │   │   │   └── CourseCard/        # Individual course card
│   │   │   │       ├── AuthorsList.tsx    # Card authors display
│   │   │   │       ├── CreationDate.tsx   # Card date display
│   │   │   │       ├── CourseCard.tsx     # Main card component
│   │   │   │       ├── DeleteCourseButton.tsx  # Delete action
│   │   │   │       ├── Description.tsx     # Card description
│   │   │   │       ├── Duration.tsx       # Card duration
│   │   │   │       ├── EditCourseButton.tsx    # Edit action
│   │   │   │       ├── ShowCourseButton.tsx     # View action
│   │   │   │       └── Title.tsx          # Card title
│   │   │   └── SearchBar/           # Search functionality
│   │   │       ├── SearchBar.tsx    # Search container
│   │   │       ├── SearchButton.tsx # Search submit button
│   │   │       └── SearchInput.tsx  # Search input field
│   │   ├── EmptyCoursesList/     # Empty state components
│   │   │   ├── AddNewCourseButton.tsx  # CTA button
│   │   │   ├── EmptyCoursesList.tsx    # Container component
│   │   │   ├── Subtitle.tsx            # Helper text
│   │   │   └── Title.tsx               # Empty state title
│   │   ├── Header/               # Application header
│   │   │   ├── Header.tsx         # Header container
│   │   │   ├── LoginButton.tsx    # Login action button
│   │   │   ├── Logo.tsx           # Logo component
│   │   │   └── UserName.tsx       # Username display
│   │   ├── LogIn/                # Authentication components
│   │   │   └── LogIn.tsx          # Login form component
│   │   ├── ProtectedRoute.tsx     # Route protection wrapper
│   │   └── ui/                    # Reusable UI components
│   │       └── Button.tsx         # Custom button component
│   ├── context/                  # React context providers
│   ├── services/                 # API service layer
│   │   ├── auth.service.ts       # Authentication API
│   │   ├── authors.service.ts    # Authors API
│   │   └── courses.service.ts    # Courses API
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts               # All type definitions
│   ├── App.tsx                   # Main application component
│   ├── index.css                 # Global styles (Tailwind)
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts            # Vite environment types
├── .eslint.config.js            # ESLint configuration
├── .gitignore                    # Git ignore rules
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.app.json           # TypeScript app config
├── tsconfig.json                # TypeScript base config
├── tsconfig.node.json          # TypeScript Node config
└── vite.config.ts              # Vite configuration
```

---

## 🔌 API Endpoints Documentation

### Authentication API (Dummy JSON)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `https://dummyjson.com/auth/login` | User login with credentials |
| POST | `https://dummyjson.com/auth/refresh` | Refresh authentication token |
| GET | `https://dummyjson.com/auth/me` | Get current user information |

**Login Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

### Courses API (MockAPI)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `https://698641a06964f10bf255e850.mockapi.io/api/courses` | Retrieve all courses |
| GET | `https://698641a06964f10bf255e850.mockapi.io/api/courses/:id` | Get single course by ID |
| POST | `https://698641a06964f10bf255e850.mockapi.io/api/courses` | Create new course |
| PUT | `https://698641a06964f10bf255e850.mockapi.io/api/courses/:id` | Update existing course |
| DELETE | `https://698641a06964f10bf255e850.mockapi.io/api/courses/:id` | Delete course by ID |

**Course Object Structure:**
```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Author[];
}
```

### Authors API (MockAPI)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `https://698641a06964f10bf255e850.mockapi.io/api/authors` | Retrieve all authors |
| GET | `https://698641a06964f10bf255e850.mockapi.io/api/authors/:id` | Get single author by ID |
| POST | `https://698641a06964f10bf255e850.mockapi.io/api/authors` | Create new author |
| DELETE | `https://698641a06964f10bf255e850.mockapi.io/api/authors/:id` | Delete author by ID |

**Author Object Structure:**
```typescript
interface Author {
  id: string;
  name: string;
}
```

---

## 🧩 Component Architecture

### Page-Level Components

| Component | Path | Purpose |
|-----------|------|---------|
| **App.tsx** | `src/App.tsx` | Main application shell with routing |
| **Courses.tsx** | `src/components/Courses/Courses.tsx` | Courses page container |
| **CourseInfo.tsx** | `src/components/CourseInfo/CourseInfo.tsx` | Course details page |
| **LogIn.tsx** | `src/components/LogIn/LogIn.tsx` | Authentication page |

### Functional Components

#### Header Components
- **Header.tsx** - Main header with navigation
- **Logo.tsx** - Application logo display
- **LoginButton.tsx** - Login/logout toggle
- **UserName.tsx** - Authenticated user display

#### Course Components
- **CoursesList.tsx** - Grid wrapper for course cards
- **CourseCard.tsx** - Individual course display card
- **CourseForm.tsx** - Course creation/editing form

#### Course Card Sub-components
- **Title.tsx** - Course title display
- **Description.tsx** - Course description
- **AuthorsList.tsx** - Course authors
- **Duration.tsx** - Formatted duration
- **CreationDate.tsx** - Course creation date
- **ShowCourseButton.tsx** - View course details
- **EditCourseButton.tsx** - Edit course action
- **DeleteCourseButton.tsx** - Remove course action

#### Course Info Components
- **CourseInfoTitle.tsx** - Info page title
- **CourseInfoCard.tsx** - Info card wrapper
- **BackButton.tsx** - Navigation back

#### Search & Filter
- **SearchBar.tsx** - Search container
- **SearchInput.tsx** - Text input field
- **SearchButton.tsx** - Submit search

#### Empty States
- **EmptyCoursesList.tsx** - No courses display
- **Title.tsx** - Empty state heading
- **Subtitle.tsx** - Helper instruction text
- **AddNewCourseButton.tsx** - CTA to add first course

---

## 🎯 Validation Rules

### Login Form
| Field | Rules |
|-------|-------|
| Username | Required, 3-20 characters, alphanumeric |
| Password | Required, 8-20 characters |

### Course Form
| Field | Rules |
|-------|-------|
| Title | Required, 2-100 characters |
| Description | Required, 10-500 characters |
| Duration | Required, positive integer (minutes) |
| Authors | Required, at least one author selected |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Mobile | 480px | Small phones |
| Tablet | 800px | Tablets, large phones |
| Desktop | 1280px | Desktop computers |

---

## 🔧 Configuration Files

### Vite (vite.config.ts)
- TypeScript compilation
- React plugin configuration
- Development server settings
- Build optimization

### TypeScript (tsconfig.json)
- Strict mode enabled
- JSX compilation
- Module resolution
- Type checking rules

### Tailwind CSS (tailwind.config.js)
- Custom color palette
- Responsive breakpoints
- Animation utilities
- Component classes

### ESLint (eslint.config.js)
- React hooks rules
- TypeScript compatibility
- Best practices enforcement
- Code style consistency

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain prop type definitions
- Write meaningful commit messages
- Add comments for complex logic


