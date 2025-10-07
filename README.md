# Real Estate Platform

A modern real estate platform for searching, browsing, and managing property listings including apartments, houses, and land. The application offers advanced search filters, interactive maps, and social features for users.

## 🏠 Features

### For All Users:

- **Property Browsing** - view property listings with advanced filters
- **Interactive Maps** - property locations on interactive maps
- **Detailed Listings** - complete descriptions with high-quality images
- **Search Filters** - by type, price, location, number of rooms
- **Responsive Design** - works on all devices

### For Authenticated Users:

- **Property Management** - add, edit, and delete your own listings
- **Favorites** - save interesting properties
- **Real-time Chat** - communicate with other users
- **User Profile** - manage personal information

## 🛠️ Technologies

### Frontend

- **React 18.3.1** - modern UI framework
- **React Router Dom** - application routing
- **Zustand** - state management
- **React Leaflet** - interactive maps
- **React Quill** - rich text editor
- **Axios** - API communication
- **SCSS** - styling
- **Socket.io Client** - real-time chat

### Backend

- **Node.js** - runtime environment
- **Express.js** - web framework
- **MongoDB** - NoSQL database
- **Prisma** - ORM for MongoDB
- **JWT** - user authentication
- **bcrypt** - password hashing
- **Socket.io** - real-time communication
- **CORS** - cross-origin request handling

### Deployment

- **Vercel** - application hosting
- **Frontend**: https://real-estate-peach-one.vercel.app
- **Backend API**: https://real-estate-api-beige.vercel.app

## 📁 Project Structure

```
real-estate/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Application pages
│   │   ├── lib/           # Utilities and configuration
│   │   └── context/       # Context API
│   └── public/            # Static assets
├── api/                   # Backend API
│   ├── controllers/       # Business logic
│   ├── routes/           # Endpoint definitions
│   ├── middleware/       # Middleware (auth, CORS)
│   ├── lib/              # Configuration (Prisma)
│   └── prisma/           # Database schema
└── socket/               # Socket.io server
```

## 🚀 Local Development

### Prerequisites

- Node.js (v18+)
- MongoDB
- npm or yarn

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend API

```bash
cd api
npm install
npm run build  # Generates Prisma client
npm start
```

### Socket Server

```bash
cd socket
npm install
npm start
```

## 🌐 Deployment

The application is deployed on Vercel platform:

- **Frontend**: Automatic deployment from GitHub
- **API**: Serverless functions
- **Database**: MongoDB Atlas

## 📝 Environment Variables

### Backend (.env)

```
DATABASE_URL="your_mongodb_connection_string"
JWT_SECRET_KEY="your_jwt_secret"
CLIENT_URL="https://real-estate-peach-one.vercel.app"
```

## 🔧 Key Features

### Authentication System

- User registration and login
- JWT tokens with cookies
- Authorization middleware

### Property Management

- CRUD operations for listings
- Image upload and management
- Filtering and search functionality

### Real-time Chat

- Socket.io for live communication
- Private messages between users
- New message notifications

### Interactive Maps

- React Leaflet with OpenStreetMap
- Property location markers
- Integration with listing data

## 🐛 Recent Fixes

- ✅ Fixed navigation when clicking on property images
- ✅ Resolved API connection between frontend and backend
- ✅ Fixed CORS issues
- ✅ Optimized Vercel deployment configuration

## 👨‍💻 Author

Tomasz Rudnicki - [tomrud88](https://github.com/tomrud88)

## 📄 License

This project is available under the MIT License.
