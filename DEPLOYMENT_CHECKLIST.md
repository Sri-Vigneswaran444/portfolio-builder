# Deployment Checklist

## Before Deploying

- [ ] Push code to GitHub
  ```bash
  git add .
  git commit -m "Setup for production deployment"
  git push origin main
  ```

- [ ] Test locally one more time
  ```bash
  source .venv/bin/activate
  ollama serve  # In another terminal
  uvicorn backend.app:app --reload
  # In another terminal
  cd frontend && npm run dev
  ```

## Deploy Backend (Render)

- [ ] Create Render account at [render.com](https://render.com)
- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub repo
- [ ] Fill in deployment settings:
  - Name: `portfolio-rag-backend`
  - Runtime: `Python`
  - Build: `pip install -r requirements.txt`
  - Start: `uvicorn backend.app:app --host 0.0.0.0 --port $PORT`
  - Instance: Free tier
- [ ] Copy the deployment URL (e.g., `https://portfolio-rag-backend.onrender.com`)

## Deploy Frontend (Netlify)

- [ ] Create Netlify account at [netlify.com](https://netlify.com)
- [ ] Click "Add new site" → "Import from Git"
- [ ] Connect GitHub repo
- [ ] Verify settings:
  - Base directory: `frontend`
  - Build: `npm install && npm run build`
  - Publish: `dist`
- [ ] Set environment variable:
  - Key: `VITE_API_URL`
  - Value: (Your Render backend URL)
- [ ] Trigger deploy (usually automatic)
- [ ] Note your Netlify URL (e.g., `https://[name].netlify.app`)

## Post-Deployment

- [ ] Test frontend: Open your Netlify URL in browser
- [ ] Test chat feature: Type a question and verify response
- [ ] Check browser console (F12) for errors
- [ ] Monitor Render logs for backend issues

## If Something Goes Wrong

1. **Backend errors** → Check Render logs
2. **Frontend can't reach backend** → Verify VITE_API_URL in Netlify matches Render URL
3. **CORS errors** → Backend already has CORS enabled
4. **Cold start delay** → Free tier instances sleep after inactivity (normal)

## Environment URLs

- **Frontend**: `https://[your-netlify-site].netlify.app`
- **Backend API**: `https://[your-render-service].onrender.com`
- **Backend Health Check**: `https://[your-render-service].onrender.com/docs` (Swagger UI)
