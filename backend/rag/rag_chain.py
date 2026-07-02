from langchain_groq import ChatGroq
import os
from pathlib import Path
from dotenv import load_dotenv

from backend.rag.retriever import PortfolioRetriever

# Load .env from project root
env_path = Path(__file__).parent.parent.parent / ".env"
load_dotenv(env_path)

class PortfolioRAG:

    def __init__(self):

        self.retriever = PortfolioRetriever()

        groq_api_key = os.getenv("GROQ_API_KEY")
        if not groq_api_key:
            raise ValueError("GROQ_API_KEY not found in environment variables. Please set it in .env file")

        self.llm = ChatGroq(
            model="llama-3.3-70b-versatile",
            temperature=0,
            api_key=groq_api_key
        )

    def ask(self, question):

        # Retrieve relevant chunks
        results = self.retriever.retrieve(question)

        context = "\n\n".join(
            results["documents"][0]
        )

        prompt = f"""
You are Sri Vigneswaran's AI Portfolio Assistant.

Answer ONLY from the supplied context.

If the answer is unavailable,
say:

"I couldn't find that information in Sri Vigneswaran's portfolio."

--------------------
Context
--------------------

{context}

--------------------
Question
--------------------

{question}

Answer:
"""

        response = self.llm.invoke(prompt)

        return response.content


if __name__ == "__main__":

    rag = PortfolioRAG()

    while True:

        question = input("\nAsk : ")

        if question.lower() == "exit":
            break

        answer = rag.ask(question)

        print("\nAnswer\n")

        print(answer)