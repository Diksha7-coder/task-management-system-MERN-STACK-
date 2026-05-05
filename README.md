# 📝 Task Management System (MERN Stack)

A full-stack Task Management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to manage daily tasks efficiently with features like authentication, task creation, updates, and deletion.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based)
* 🧾 Create, Read, Update, Delete (CRUD) Tasks
* 📌 Mark tasks as completed or pending
* 📅 Organized task tracking
* 🌐 RESTful API integration
* 🎨 Responsive UI using React + Chakra UI / Bootstrap

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* React Router DOM
* Axios
* Chakra UI / Bootstrap

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* bcrypt (for password hashing)

---

## 📂 Project Structure

```
task-management/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── app.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-management.git
cd task-management
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

or

```bash
node app.js
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Run frontend:

```bash
npm start
```

---

## 🌐 API Endpoints (Sample)

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| POST   | /api/register  | Register user   |
| POST   | /api/login     | Login user      |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---



---

## 🧪 Testing

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is licensed under the ISC License.

---



---

## 💡 Future Improvements

* 📊 Task analytics dashboard
* 🔔 Notifications & reminders
* 📱 Mobile responsiveness improvements
* 🌍 Deployment (AWS / Vercel / Render)

---

⭐ If you like this project, consider giving it a star!
