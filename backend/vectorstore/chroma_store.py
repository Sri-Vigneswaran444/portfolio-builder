import chromadb

from backend.config import CHROMA_DB_DIR
from backend.processors.embedding_generator import generate_embeddings


def create_vector_database():

    # Load chunks and embeddings
    chunks, embeddings = generate_embeddings()

    # Create Persistent Client
    client = chromadb.PersistentClient(path=str(CHROMA_DB_DIR))

    # ---------------------------------
    # Delete old collection (if exists)
    # ---------------------------------
    try:
        client.delete_collection("portfolio")
        print("Old collection deleted.")
    except Exception:
        print("No existing collection found.")

    # ---------------------------------
    # Create fresh collection
    # ---------------------------------
    collection = client.create_collection(
        name="portfolio"
    )

    print("\nAdding embeddings to ChromaDB...\n")

    # ---------------------------------
    # Store every chunk
    # ---------------------------------
    for i, chunk in enumerate(chunks):

        collection.add(
            ids=[f"chunk_{i}"],
            documents=[chunk.page_content],
            embeddings=[embeddings[i].tolist()],
            metadatas=[chunk.metadata]
        )

    print("=" * 50)
    print(f"Stored {len(chunks)} chunks successfully!")
    print("=" * 50)

    return collection


if __name__ == "__main__":
    create_vector_database()