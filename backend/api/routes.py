from fastapi import APIRouter

from backend.api.schemas import ChatRequest, ChatResponse
from backend.rag.rag_chain import PortfolioRAG

router = APIRouter()

rag = PortfolioRAG()


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    answer = rag.ask(request.question)

    return ChatResponse(
        answer=answer
    )