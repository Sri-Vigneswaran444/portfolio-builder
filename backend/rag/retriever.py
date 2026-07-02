import chromadb

from sentence_transformers import SentenceTransformer

from backend.config import (
    CHROMA_DB_DIR,
    EMBEDDING_MODEL,
    TOP_K
)


class PortfolioRetriever:

    def __init__(self):

        # Load embedding model
        self.embedding_model = SentenceTransformer(
            EMBEDDING_MODEL
        )

        # Connect to ChromaDB
        client = chromadb.PersistentClient(
            path=str(CHROMA_DB_DIR)
        )

        self.collection = client.get_collection(
            "portfolio"
        )

    def retrieve(self, question):

        # Convert question into embedding
        question_embedding = self.embedding_model.encode(
            question
        ).tolist()

        # Search ChromaDB
        results = self.collection.query(

            query_embeddings=[question_embedding],

            n_results=TOP_K

        )

        return results


if __name__ == "__main__":

    retriever = PortfolioRetriever()

    question = input("Ask: ")

    results = retriever.retrieve(question)

    print("=" * 60)

    for i, (doc, metadata) in enumerate(
        zip(results["documents"][0], results["metadatas"][0]),
        start=1
    ):

        print(f"\nResult {i}")
        print("-" * 60)
        print("Source :", metadata["source"])
        print()
        print(doc)