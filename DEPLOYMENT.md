# Deployment Guide

## Architecture
- **Frontend**: React + Vite deployed on **Netlify**
- **Backend**: FastAPI deployed on **Render** (or Railway)

## Prerequisites
- GitHub account with this repo pushed
- Netlify account (free tier available)
- Render account (free tier available)

---

## Step 1: Deploy Backend to Render

### 1.1 Prepare Backend
```bash
# Ensure requirements.txt is in root (it's already there)
ls requirements.txt
```

### 1.2 Create Render Deployment
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Name**: `portfolio-rag-backend`
   - **Environment**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn backend.app:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: Free

### 1.3 Set Environment Variables in Render
In the "Environment" section, add:
```
OLLAMA_BASE_URL=http://localhost:11434
```

### 1.4 Deploy
- Click "Create Web Service"
- Wait 2-3 minutes for deployment
- Copy the service URL (e.g., `https://portfolio-rag-backend.onrender.com`)

---

## Step 2: Deploy Frontend to Netlify

### 2.1 Create Netlify Deployment
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize
4. Choose this repo
5. Configure:
   - **Base directory**: `/frontend` (if it doesn't auto-detect)
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `dist`

### 2.2 Set Environment Variables in Netlify
1. Go to Site settings → Environment variables
2. Add: 
   ```
   VITE_API_URL = https://portfolio-rag-backend.onrender.com
   ```
   (Use the Render backend URL from Step 1.4)

### 2.3 Deploy
- Netlify will auto-deploy from the main branch
- Your site will be live at `https://[your-site].netlify.app`

---

## Step 3: Test Everything

1. Open your Netlify URL
2. Test the chat feature
3. Check browser console (F12) for any errors
4. Backend should respond with RAG answers

---

## Troubleshooting

### Backend not responding
- Check Render logs: Render Dashboard → Your Service → Logs
- Ensure Ollama model is downloaded
- Verify VITE_API_URL in Netlify matches Render URL

### CORS errors
- FastAPI already has CORS enabled with `allow_origins=["*"]`
- If issues persist, check backend logs on Render

### Build fails on Netlify
- Check Netlify logs: Netlify → Site → Deploys
- Ensure `frontend` folder has `package.json` and `tsconfig.json`

---

## Local Development

```bash
# Terminal 1: Backend
source .venv/bin/activate
ollama serve  # In another terminal
uvicorn backend.app:app --reload

# Terminal 2: Frontend
cd frontend
npm run dev
```

Visit `http://localhost:5173`