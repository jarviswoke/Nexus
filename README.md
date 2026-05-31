# 💬 NEXUS - Real-Time Chat Application

NEXUS is a modern full-stack chat application built using the MERN stack. It enables users to communicate in real time through a clean and responsive interface while providing secure authentication, profile management, and media uploads.

---

## 🚀 Features

### 👤 Authentication

* User Registration
* User Login
* JWT Authentication
* Secure Password Hashing
* Protected Routes

### 💬 Messaging

* Real-Time Chat Interface
* One-to-One Messaging
* Message History
* Conversation Management

### 🖼️ Profile Management

* Update User Profile
* Upload Profile Pictures
* Cloudinary Image Storage

### 🎨 User Experience

* Responsive Design
* Multiple DaisyUI Themes
* Dark & Light Mode Support
* Modern Chat Interface
* Toast Notifications

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS v4
* DaisyUI
* Zustand
* React Router DOM
* Axios
* React Hook Form
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cloudinary

### Database

* MongoDB Atlas

---

## 📂 Project Structure

```bash
NEXUS/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── message.model.js
│   │   └── routes/
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/nexus-chat-app.git

cd nexus-chat-app
```

---

## 📦 Install Dependencies

### Backend

```bash
cd backend

npm install
```

### Frontend

```bash
cd frontend

npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string

PORT=5001

JWT_SECRET=your_jwt_secret

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend

npm run dev
```

Backend runs on:

```text
http://localhost:5001
```

### Start Frontend

```bash
cd frontend

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🎨 DaisyUI Themes

NEXUS supports multiple DaisyUI themes including:

* Light
* Dark
* Cupcake
* Retro
* Cyberpunk
* And 20+ additional DaisyUI themes

Users can switch themes for a personalized chat experience.

---

## 🔮 Future Enhancements

* Group Chats
* Voice Messages
* Video Calling
* Online Presence Indicators
* Read Receipts
* Message Reactions
* File Sharing
* Push Notifications

 

## ⭐ Support

If you found this project useful, please consider giving it a Star ⭐ on GitHub.
