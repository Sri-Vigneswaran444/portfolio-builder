from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api.routes import router

app = FastAPI(
    title="Sri Vigneswaran AI Portfolio",
    version="1.0.0"
)

# React frontend permission
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # Change later after deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

