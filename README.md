# Hotel Booking App

## 🧠 Project Overview
**Hotel Booking App** is a full-stack web application for hotel room reservations. It provides functionalities for both regular users and administrators.
<p align="center">
<img width="946" alt="design1" src="https://github.com/user-attachments/assets/7c473d91-44fe-406c-8c39-882909f502e4" />
</p>

---

### 🏨 Hotel Royale - Features & Design

- User registration and login  
- Room browsing and detailed view  
- Room booking and cancellation  
- Admin panel for managing rooms and users  
- View and manage all rooms and bookings  
- Role-based access control  
- Fully responsive design  

---

#### 🎨 Design, Color Palette, and Typography

The visual design of the application is inspired by luxury hotels, aiming to evoke a sense of elegance and trust.

**Font:**  
Montserrat (imported via Google Fonts) is used throughout the application. This modern, readable font enhances the professional look of the site.

### Color Palette

- <span style="display:inline-block;width:20px;height:20px;background-color:#bfa06a;margin-right:8px;"></span> **#bfa06a**: A vibrant gold used for highlighted elements and call-to-action buttons.

- <span style="display:inline-block;width:20px;height:20px;background-color:#8b6508;margin-right:8px;"></span> **#8b6508**: A dark gold-brown shade perfect for headings and accent details.

- <span style="display:inline-block;width:20px;height:20px;background-color:#d4af37;margin-right:8px;"></span> **#d4af37**: A classic gold tone applied for striking highlights.

- <span style="display:inline-block;width:20px;height:20px;background-color:#fffdf8;border:1px solid #ccc;margin-right:8px;"></span> **#fffdf8**: An almost white background that imparts a feeling of spaciousness and luxury.

**Background and Imagery:**  
- The home page features a background image of a luxury hotel with reduced opacity to create balance between background and foreground content.  
- Additional images (restaurant, pool, gym, outdoor pool) effectively showcase the hotel's facilities, reinforcing a premium experience.

---

## 🛠️ Technologies Used
- **Frontend:**
  - React.js
  - Bootstrap (CSS)
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
- **Others:**
  - Google Maps API
  - Git & GitHub
  - Ant Design (antd)
  - SweetAlert2
  - RingLoader
 
---

## 📁 Project Structure
<pre>D:.
├── .gitignore
├── db.js
├── package-lock.json
├── package.json
├── pulled_changes.patch
├── README.md
├── README.old.md
├── server.js
├── .vscode
│ └── settings.json
├── models
│ ├── booking.js
│ ├── room.js
│ └── user.js
├── node_modules
│ └── ...
├── public
│  ├── favicon.ico
│  ├── gym.jpg
│  ├── index.html
│  ├── logo192.png
│  ├── logo512.png
│  ├── manifest.json
│  ├── pool.jpg
│  ├── restaurant.jpg
│  ├── robots.txt
│  └── spa.jpg
├── routes
│ ├── bookingsRoute.js
│ ├── roomsRoute.js
│ └── usersRoute.js
├── src
│  ├── App.css
│  ├── App.js
│  ├── App.test.js
│  ├── hotel.jpg
│  ├── index.css
│  ├── index.js
│  ├── oldhotel.jpg
│  ├── reportWebVitals.js
│  ├── setupTests.js
├── components
│  ├── Error.js
│  ├── Featurecard.css
│  ├── Featurecard.js
│  ├── Footer.css
│  ├── Footer.js
│  ├── Loader.js
│  ├── Navbar.css
│  ├── Navbar.js
│  ├── Room.css
│  ├── Room.js
│  └── Success.js
└── screens
  ├── AboutUsscreen.css
  ├── AboutUsscreen.js
  ├── Adminscreen.css
  ├── Adminscreen.js
  ├── Bookingscreen.js
  ├── Contactscreen.css
  ├── Contactscreen.js
  ├── Homescreen.js
  ├── Loginscreen.js
  ├── Profilescreen.css
  ├── Profilescreen.js
  └── Registerscreen.js </pre>

---

## 👨‍👩‍👦 Team Members
- Ajdin Fazlihodžić (Team Leader)
Responsible for project maintenance and management, task distribution, bug fixing, and research. Set up project, configured the React application, integrated Bootstrap, implemented backend booking functionality, and finalized the project by resolving warnings and polishing the README file.

- Medin Ismić
Developed the Express.js backend and connected the application with MongoDB. Integrated backend with frontend and contributed to CSS styling and final UI adjustments. Also participated in testing the application.

- Džejlan Solić
Implemented the room management backend (room.js), developed backend features for user registration and login, and worked alongside Medin on CSS styling and page refinements. Participated in testing as well.

---

## 🚀 Installation & Running
git clone https://github.com/AjdinFazlihodzicUNZE/hotel-booking-app.git
cd HOTEL-BOOKING-APP
npm install
### Start backend (in one terminal)
nodemon server.js
### Start frontend (in another terminal)
npm start 

---

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; gap: 20px;">
  <img alt="aboutus" src="https://github.com/user-attachments/assets/df0ca8db-ae51-4a95-bd59-e69a161def46" style="width: 300px; height: 170px; object-fit: cover; border: 1px solid #ccc; border-radius: 5px;" />
  <img alt="bookroom" src="https://github.com/user-attachments/assets/95c7307a-1bee-4ac9-ae26-7b09564bed6a" style="width: 300px; height: 170px; object-fit: cover; border: 1px solid #ccc; border-radius: 5px;" />
  <img alt="contactus" src="https://github.com/user-attachments/assets/98faa715-57b2-4173-b425-b9c6b68e7173" style="width: 300px; height: 170px; object-fit: cover; border: 1px solid #ccc; border-radius: 5px;" />
</div>

