# Backend Revision 🚀

A simple **Node.js + Express.js backend project** created for learning and revising the fundamentals of backend development and REST APIs. 

The project currently implements a basic **Notes API** using Express.js with an in-memory array as a temporary data store.

## 📌 Project Overview

This project is part of my backend development practice.

The main goal is to understand:

* Node.js backend structure
* Express.js
* Creating an Express application
* Creating REST API endpoints
* GET and POST requests
* Request and response handling
* HTTP status codes
* Basic project structure
* Separating the application and server configuration

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **JavaScript**
* **npm**
* **REST API**

## 📂 Project Structure

```text
backendrevision/
│
├── src/
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔑 API Endpoints

### GET `/notes`

Fetches the available notes.

**Request:**

```http
GET /notes
```

**Response:**

```json
{
  "message": "All data Feteched Sucessfully"
}
```

### POST `/notes`

Creates a new note and temporarily stores it in memory.

**Request:**

```http
POST /notes
Content-Type: application/json
```

Example body:

```json
{
  "title": "Learn Express",
  "content": "Practice REST APIs with Express.js"
}
```

**Response:**

```json
{
  "message": "Notes Created Sucessfully"
}
```

> **Note:** The current project uses an in-memory array as a temporary database. Data will be lost whenever the server restarts.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/MOHAMMEDYOUNUSUDDIN/backendrevision.git
```

### 2. Navigate into the project

```bash
cd backendrevision
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The server will start on:

```text
http://localhost:3000
```

## 🧪 Testing the API

You can test the API using tools such as:

* Postman
* Thunder Client
* Insomnia
* cURL

### Test GET request

```http
GET http://localhost:3000/notes
```

### Test POST request

```http
POST http://localhost:3000/notes
```

Body:

```json
{
  "title": "Backend Revision",
  "content": "Learning Node.js and Express.js"
}
```

## 🧠 What I Learned

Through this project, I am practicing:

* How an Express server works
* How `require()` is used in CommonJS
* How to create an Express application
* How routes work
* How HTTP methods work
* How to send JSON responses
* How HTTP status codes are used
* How to separate `app.js` and `server.js`
* How backend APIs are tested

## 🔮 Future Improvements

The project can be extended with:

* [ ] Add `express.json()` middleware
* [ ] Return actual notes from the GET endpoint
* [ ] Add unique IDs to notes
* [ ] Add PUT endpoint
* [ ] Add DELETE endpoint
* [ ] Add MongoDB/PostgreSQL database
* [ ] Add validation
* [ ] Add error handling middleware
* [ ] Add environment variables
* [ ] Add authentication and authorization
* [ ] Add proper MVC architecture
* [ ] Add API documentation
* [ ] Add automated tests

## 📚 Learning Purpose

This repository is mainly intended for **backend development practice and revision**.

It will evolve as I learn more advanced backend concepts and technologies.

## 👨‍💻 Author

**MOHAMMED YOUNUS UDDIN**

GitHub: [MOHAMMEDYOUNUSUDDIN](https://github.com/MOHAMMEDYOUNUSUDDIN)

---

⭐ This repository is continuously being improved as I learn backend development.
