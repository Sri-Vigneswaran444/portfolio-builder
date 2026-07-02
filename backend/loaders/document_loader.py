print("Document loader started")

from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
from backend.config import DATA_DIR

def load_documents():
    documents = []

    md_loader = DirectoryLoader(
        str(DATA_DIR),
        glob="**/*.md",
        show_progress=True,
    )
    documents.extend(md_loader.load())

    pdf_path = DATA_DIR / "resume.pdf"

    if pdf_path.exists():
        pdf_loader = PyPDFLoader(str(pdf_path))
        documents.extend(pdf_loader.load())

    return documents


if __name__ == "__main__":
    print("Loading documents...")

    docs = load_documents()

    print(f"Total Documents Loaded: {len(docs)}")

    for doc in docs:
        print(doc.metadata) 