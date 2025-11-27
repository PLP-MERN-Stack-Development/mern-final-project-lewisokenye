# MERN Bug Tracker

A full-stack **MERN** application for reporting, tracking, updating, and deleting bugs in projects.
This project includes **unit and integration tests**, **error handling**, and demonstrates **debugging best practices** in both frontend and backend.

---

## Table of Contents

* [Features](#features)
* [Technologies](#technologies)
* [Project Setup](#project-setup)
* [Running the Project](#running-the-project)
* [Testing](#testing)
* [Debugging Techniques](#debugging-techniques)
* [Error Handling](#error-handling)
* [Folder Structure](#folder-structure)

---

## Features

* Report new bugs via a form
* View a list of all reported bugs
* Update bug status (open, in-progress, resolved)
* Delete bugs
* Fully tested with unit and integration tests
* Error boundaries in React and Express error handling

---

## Technologies

* **Frontend:** React, Vite, Axios, React Testing Library
* **Backend:** Node.js, Express, MongoDB, Mongoose, Jest, Supertest
* **Tools:** pnpm, Chrome DevTools, Node Inspector

---

## Project Setup

### Backend

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file with:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-bug-tracker
```

### Frontend

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
pnpm install
```

---

## Running the Project

### Backend

```bash
cd backend
pnpm dev
```

Server runs on: `http://localhost:5000`

### Frontend

```bash
cd frontend
pnpm dev
```

Frontend runs on: `http://localhost:5173`

---

## Testing

### Backend Tests

Run all backend tests:

```bash
cd backend
pnpm test -- --coverage
```

* Unit tests: helper functions, middleware
* Integration tests: API routes (CRUD operations)

### Frontend Tests

Run all frontend tests:

```bash
cd frontend
pnpm test -- --coverage
```

* Unit tests: component rendering, form validation
* Integration tests: API calls, UI updates
* ErrorBoundary tests: capturing UI crashes

---

## Debugging Techniques

* **Console logs:** Track values and application flow
* **Chrome DevTools:** Inspect components, network requests, and state
* **Node.js Inspector:** Debug backend server code
* **Intentional bugs:** Use console and breakpoints to simulate errors and fix them

---

## Error Handling

* **Backend:** Express middleware (`errorMiddleware.js`) captures and responds with 500 errors
* **Frontend:** React `ErrorBoundary` component gracefully handles crashes without breaking the UI

---

## Folder Structure

```
mern-bug-tracker/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── tests/
│   │   ├── utils/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── tests/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

---

## Author

**Emmanuel Mose**

---

## Notes

* Make sure MongoDB is running locally for backend connectivity.
* Tests include both **success and failure scenarios** to ensure full coverage.
* Use `pnpm dev` for both backend and frontend during development for hot-reloading.
