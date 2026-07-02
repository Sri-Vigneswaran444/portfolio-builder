from sentence_transformers import SentenceTransformer

from backend.processors.text_splitter import split_documents
from backend.config import EMBEDDING_MODEL


def generate_embeddings():

    print("Loading embedding model...")

    model = SentenceTransformer(EMBEDDING_MODEL)

    print("Loading document chunks...")

    chunks = split_documents()

    print("Generating embeddings...")

    texts = [chunk.page_content for chunk in chunks]

    embeddings = model.encode(
        texts,
        show_progress_bar=True
    )

    return chunks, embeddings


if __name__ == "__main__":

    chunks, embeddings = generate_embeddings()

    print("=" * 60)

    print(f"Chunks : {len(chunks)}")

    print(f"Embeddings : {len(embeddings)}")

    print("=" * 60)

    print("\nFirst Chunk\n")

    print(chunks[0].page_content)

    print("\nEmbedding Dimension")

    print(len(embeddings[0]))

    print("\nFirst 10 Numbers")

    print(embeddings[0][:10])