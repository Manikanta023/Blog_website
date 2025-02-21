# 📝 Blog Website  

A **blog website** built using **Node.js, Express, and MongoDB**. This project includes **two user roles**:  
- **Viewer**: Can **browse** and **read** blogs.  
- **Admin**: Can **add, update, and delete** blogs.  

---

## 🚀 Features  
✅ **Viewers** can browse and read blogs.  
✅ **Admins** can **create, edit, and delete** blogs.  
✅ **Secure authentication** using **JWT (JSON Web Token)**.  
✅ **Password encryption** with **bcrypt**.  
✅ **RESTful API** built with Express.js.  
✅ **MongoDB database** for efficient data storage.  

---

## 🛠️ Tech Stack  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Token)  
- **Security**: bcrypt for password hashing  

---

## 📌 Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Manikanta023/Blog_website.git
cd Blog_website

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI=*********
JWT_SECRET=**********

4️⃣ Start the Server
npm start
The server will run at http://localhost:5000 🚀

📌 API Routes
Viewer Routes
GET /blogs - Get all blogs
Admin Routes
POST /admin/login - Admin login
POST /blogs - Create a new blog
PUT /blogs/:id - Update a blog
DELETE /blogs/:id - Delete a blog


📜 License
This project is open-source and free to use.

💡 Contributing
Want to contribute?
Fork the repository
Create a new branch (git checkout -b feature-name)
Commit your changes (git commit -m "Added new feature")
Push your branch (git push origin feature-name)
Create a Pull Request 🎉


📬 Contact
For queries or suggestions, feel free to reach out:
📧 Email: kakademanikanta23@gmail.com
🔗 GitHub: Manikanta023
