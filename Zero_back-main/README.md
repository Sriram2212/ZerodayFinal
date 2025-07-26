# ZeroDay Backend API

Express.js backend API for the ZeroDay Student Community Platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- npm or yarn

### Installation
```bash
cd Zero_back-main
npm install
```

### Environment Setup
Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/zeroday
JWT_SECRET=your-secret-key
NODE_ENV=development
PORT=5000
```

### Run Locally
```bash
npm run dev
```

Server will start at: `http://localhost:5000`

## 🚀 Deploy to Vercel

### 1. Environment Variables
Add these in Vercel dashboard:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/zeroday
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

### 2. Deploy Steps
1. Push code to GitHub
2. Connect repository to Vercel
3. Set root directory to `Zero_back-main`
4. Add environment variables
5. Deploy!

### 3. Test Deployment
Visit: `https://your-backend.vercel.app/api/health`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill
- `GET /api/skills/:id` - Get skill by ID
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Sessions
- `POST /api/sessions` - Book session
- `GET /api/sessions/my` - Get user sessions
- `PUT /api/sessions/:id/status` - Update session status

### Other Endpoints
- Announcements: `/api/announcements`
- Lost & Found: `/api/lostfound`
- Complaints: `/api/complaints`
- Reviews: `/api/reviews`
- Polls: `/api/polls`
- Tech Feed: `/api/techfeed`
- Timetable: `/api/timetable`

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Upload**: Multer
- **CORS**: Enabled for frontend integration

## 📁 Project Structure

```
Zero_back-main/
├── api/
│   └── index.js          # Vercel serverless entry
├── config/
│   └── db.js            # Database connection
├── controllers/          # Route controllers
├── middleware/           # Custom middleware
├── models/              # MongoDB models
├── routes/              # API routes
├── upload/              # File uploads
├── server.js            # Main server
├── vercel.json          # Vercel config
└── package.json         # Dependencies
```

## 🔧 Configuration

### CORS
Configured for:
- Development: `http://localhost:3000`
- Production: Your frontend Vercel domain

### File Uploads
- Max file size: 10MB
- Upload directory: `./upload`

### Security
- JWT authentication
- Password hashing with bcrypt
- CORS protection
- Input validation

## 📖 Documentation

For detailed deployment instructions, see `DEPLOYMENT.md`

## 🔗 Frontend Integration

Update your frontend's `REACT_APP_API_URL`:
```
REACT_APP_API_URL=https://your-backend.vercel.app/api
``` 