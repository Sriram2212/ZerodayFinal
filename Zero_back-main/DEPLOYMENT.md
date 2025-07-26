# ZeroDay Backend - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- MongoDB Atlas account (for production database)
- Vercel account
- Node.js 16+ (for local development)

### 1. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

#### Required Variables:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/zeroday
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=production
```

#### Optional Variables:
```
JWT_EXPIRE=30d
FRONTEND_URL=https://your-frontend-domain.vercel.app
MAX_FILE_SIZE=10485760
```

### 2. MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Replace `username`, `password`, and `cluster` in the MONGO_URI

### 3. Deploy to Vercel

1. **Push your backend code to GitHub**
2. **Connect to Vercel:**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your backend repository
   - Set root directory to `Zero_back-main`

3. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `./`
   - Install Command: `npm install`

4. **Add Environment Variables** (as listed above)

5. **Deploy!**

### 4. Update Frontend API URL

After backend deployment, update your frontend's `REACT_APP_API_URL`:
```
REACT_APP_API_URL=https://your-backend-project.vercel.app/api
```

### 5. Test Your API

Visit: `https://your-backend-project.vercel.app/api/health`

Should return:
```json
{
  "message": "API Health Check",
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 📁 Project Structure
```
Zero_back-main/
├── api/
│   └── index.js          # Vercel serverless entry point
├── config/
│   └── db.js            # MongoDB connection
├── controllers/          # Route controllers
├── middleware/           # Custom middleware
├── models/              # MongoDB models
├── routes/              # API routes
├── upload/              # File uploads
├── server.js            # Main server file
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies
```

## 🔧 Configuration Files

### vercel.json
- Configures Vercel deployment
- Routes all requests to server.js
- Sets production environment

### package.json
- Updated with Vercel-specific scripts
- Added Node.js engine requirement
- Enhanced metadata

## 🚨 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error:**
   - Check MONGO_URI in Vercel environment variables
   - Ensure MongoDB Atlas IP whitelist includes Vercel IPs

2. **CORS Errors:**
   - Update FRONTEND_URL in environment variables
   - Check CORS configuration in server.js

3. **Build Failures:**
   - Ensure all dependencies are in package.json
   - Check Node.js version compatibility

4. **Environment Variables Not Working:**
   - Redeploy after adding environment variables
   - Check variable names match exactly

## 🔒 Security Notes

- Use strong JWT_SECRET in production
- Enable MongoDB Atlas security features
- Set up proper CORS origins
- Use HTTPS in production

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test API endpoints
4. Check MongoDB connection 