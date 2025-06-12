from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from enum import Enum


# ENUM for the language
class Language(str, Enum):
    PYTHON = "python"
    JAVASCRIPT = "javascript"

class RequestCode(BaseModel):
    code: str
    language: Language = Language.PYTHON

app = FastAPI()

# Allow frontend communication in dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change to specific domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/health")
def health_check():
    return {"status": " ok"}

@app.post("/api/v1/run")
def run_code(request: RequestCode):    
    return {"message": f"Running code: {request.code} in {request.language}"}

# @app.post("/api/v1/explain")
# def get_explanation(code: dict):
#     '''
#     @param code: dict
#     @return: str
#     @description: Get the AI explanation of the code
#     '''
#     return {"message": f"AI Explanation goes here for {code}"}