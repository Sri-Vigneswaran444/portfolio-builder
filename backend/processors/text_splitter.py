from langchain_text_splitters import RecursiveCharacterTextSplitter

from backend.loaders.document_loader import load_documents
from backend.config import CHUNK_SIZE, CHUNK_OVERLAP


def split_documents():

    # Load all documents
    documents = load_documents()

    # Create splitter
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP
    )

    # Split documents
    chunks = splitter.split_documents(documents)

    return chunks


if __name__ == "__main__":

    print("Splitting documents...\n")

    chunks = split_documents()

    print("=" * 60)
    print(f"Total Chunks: {len(chunks)}")
    print("=" * 60)

    # Print first 5 chunks
    for i, chunk in enumerate(chunks[:5], start=1):

        print(f"\nChunk {i}")
        print("-" * 60)
        print(chunk.page_content[:300])
        print("-" * 60)
        print(chunk.metadata)