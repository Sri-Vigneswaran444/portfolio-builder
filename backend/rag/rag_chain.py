from langchain_groq import ChatGroq
import os

from backend.rag.retriever import PortfolioRetriever


class PortfolioRAG:

    def __init__(self):

        self.retriever = PortfolioRetriever()

        self.llm = ChatGroq(
            model="mixtral-8x7b-32768",
            temperature=0,
            api_key=os.getenv("GROQ_API_KEY")
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