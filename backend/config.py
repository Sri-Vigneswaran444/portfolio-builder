from pathlib import Path

# ==============================
# Project Root
# ==============================

BASE_DIR = Path(__file__).resolve().parent

# ==============================
# Data Folder
# ==============================

DATA_DIR = BASE_DIR / "data"

# ==============================
# Vector Database
# ==============================

CHROMA_DB_DIR = BASE_DIR / "database" / "chroma_db"

# ==============================
# Chunk Settings
# ==============================

CHUNK_SIZE = 500
CHUNK_OVERLAP = 100

# ==============================
# Embedding Model
# ==============================

#changed 
# EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

# ==============================
# Local LLM
# ==============================

LLM_MODEL = "llama3.2"

# ==============================
# Retriever
# ==============================

TOP_K = 5