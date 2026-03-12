# DevOps & Full Stack Engineering Portfolio

A professionally structured repository showcasing **hands-on implementations** in **Full Stack Development** and **DevOps Engineering**, organized chronologically and maintained using **industry-standard version control practices**.

This repository reflects real-world engineering workflows with an emphasis on **clarity, modularity, reproducibility, and maintainability**.

---

## Overview

This repository consolidates multiple **backend and full stack engineering modules** developed across different lab sessions.  
Each module is designed as a **self-contained application**, preserving its execution context for ease of review, understanding, and reproducibility.

The structure mirrors how production-ready applications are organized in real-world environments.

---

##  Key Highlights

- 📅 Date-wise modular organization  
- 🧩 Independent, self-contained lab modules  
- 🌐 Full stack and backend application development  
- ⚙️ Node.js & Express-based services  
- 🗄️ Database integration using SQLite and MongoDB  
- 🧱 Clean folder hierarchy with separation of concerns  
- 🔁 Reproducible execution using npm  
- 🧠 Version-controlled development lifecycle  

---

## 📂 Repository Structure



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

##  Module Breakdown

### January 12 — Application Initialization

Focuses on bootstrapping a Node.js application with a clean project structure and managed dependencies.

**Concepts Covered:**
- Project initialization  
- Dependency management  
- Execution readiness  

**Path:**  
`Jan_12/ecommerce`

---

### January 19 — Full Stack Application

Demonstrates a complete **full stack workflow** using two coordinated applications.

**Backend Module:**
- Routing and controllers  
- Middleware handling  
- Database interaction  
- Server configuration  

**UI Module:**
- Client-side rendering  
- API integration  
- Presentation logic  

**Paths:**  
`Jan_19/DEVOPS-JAN-19`  
`Jan_19/DEVOPS-UI-JAN-19`

---

### January 22 — Backend Service with Database Integration

Implements a modular backend service emphasizing structured routing and persistent data handling.

**Focus Areas:**
- Modular design  
- Database connectivity  
- Service initialization  

**Path:**  
`Jan_22`

---

### January 29 — React Props & State Demonstration

A frontend-only React application demonstrating **props**, **state**, and **component communication** through a simple shopping interface.

#### Learning Objectives

- Understand component-based architecture  
- Differentiate between props and state  
- Implement parent–child communication  
- Observe dynamic UI updates  
- Understand React re-rendering behavior  

####  Component Hierarchy



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

This repository serves as a comprehensive engineering portfolio, reflecting:

Iterative development

Structured problem-solving

Practical implementation of modern Full Stack and DevOps concepts

# DevOps & Full Stack Lab Work
