# DevOps & Full Stack Engineering Portfolio

A professionally structured repository showcasing hands-on implementations in full stack development and DevOps engineering, organized chronologically and maintained with production-grade version control practices.

---

## Overview

This repository consolidates multiple full stack and backend engineering modules developed across different sessions. Each module represents a self-contained application, preserved with its complete execution environment to ensure reproducibility, transparency, and ease of review.

The structure reflects a real-world engineering workflow, emphasizing clarity, modularity, and maintainability.

---

## Key Features

- Date-wise modular organization
- Backend and frontend application development
- Node.js and Express-based services
- Database integration using SQLite and MongoDB
- Complete dependency inclusion for reproducible execution
- Clean folder hierarchy with separation of concerns
- Version-controlled development lifecycle

---

## Repository Structure

```text
DEVOPS-FULLSTACK/
│
├── Jan_12/
│   └── ecommerce/
│       ├── src/
│       ├── node_modules/
│       ├── package.json
│       └── package-lock.json
│
├── Jan_19/
│   ├── DEVOPS-JAN-19/
│   │   ├── src/
│   │   ├── public/
│   │   ├── node_modules/
│   │   ├── database.sqlite
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   └── DEVOPS-UI-JAN-19/
│       ├── src/
│       ├── public/
│       ├── node_modules/
│       ├── database.sqlite
│       ├── package.json
│       └── package-lock.json
│
├── Jan_22/
│   ├── src/
│   ├── node_modules/
│   ├── package.json
│   └── package-lock.json
│
├── Jan_29/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   └── components/
│   │       ├── ProductList.js
│   │       └── ProductCard.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md
```

---

## Module Details

### January 12 — Application Initialization

This module focuses on initializing a Node.js application with a structured folder layout and managed dependencies. It demonstrates project bootstrapping, dependency resolution, and execution readiness.

Path:

```
Jan_12/ecommerce
```

---

### January 19 — Full Stack Application

This module consists of two coordinated applications demonstrating a complete full stack workflow.

The backend application implements routing, controllers, middleware, database interaction, and server configuration.

The UI module integrates with the backend layer, showcasing client-side interaction and presentation logic.

Paths:

```
Jan_19/DEVOPS-JAN-19
Jan_19/DEVOPS-UI-JAN-19
```

---

### January 22 — Backend Service with Database Integration

This module implements a backend service with structured routing and database connectivity. It focuses on modular design, data handling, and service initialization.

Path:

```
Jan_22
```

---

# January 29 — React Props and State Demonstration

This module demonstrates the fundamental concepts of **props** and **state** in React through a simple component-based frontend application. The implementation focuses on understanding parent–child relationships, unidirectional data flow, and dynamic UI updates using state.

---

## Overview

The January 29 lab introduces React’s core data-handling mechanisms by building a minimal online shopping interface. The application is designed to clearly separate responsibilities between components, making it easier to understand how data is passed and managed within a React application.

The project strictly follows frontend-only architecture and avoids backend integration to maintain conceptual clarity.

---

## Learning Objectives

- Understand React component-based architecture
- Learn the difference between props and state
- Implement parent–child component communication
- Observe dynamic UI updates without page reload
- Understand React’s re-rendering mechanism

---

## Application Architecture

The application follows a simple and clean component hierarchy:

````text
Browser
   |
index.js
   |
App.js
   |
ProductList.js   (Parent Component – State Holder)
   |
ProductCard.js   (Child Component – Props Receiver)


## Execution Instructions

Each module is fully self-contained and can be executed independently.

```bash
cd <module-path>
npm install
npm start
````

All required dependencies are included within each module to ensure consistent execution across environments.

---

## Technology Stack

- Node.js
- Express.js
- JavaScript (ES6+)
- SQLite
- MongoDB
- npm
- Git & GitHub

---

## Engineering Practices

- Modular architecture
- Separation of application layers
- Explicit dependency management
- Reproducible environments
- Clean commit history
- Scalable folder design

---

## Maintainer

Kandagatla Saiteja
Hall Ticket No: **2303A52325**

---

## Notes

This repository serves as a comprehensive engineering portfolio, reflecting iterative development, structured problem-solving, and practical implementation of modern full stack and DevOps concepts.

# DevOps & Full Stack Lab Work
