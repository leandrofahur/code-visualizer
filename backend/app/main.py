from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import RequestRunCode, ResponseRunCode
from utils import run_code

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
def health_check() -> dict:
    '''
    @return: dict
    @description: Check the health of the server
    '''
    return {"status": " ok"}

@app.post("/api/v1/run")
def run_provided_code(request: RequestRunCode) -> ResponseRunCode:    
    '''
    @param request: RequestRunCode
    @return: dict
    @description: Run the python code and return the return_code, stdout and stderr
    '''
    result = run_code(request.code, request.language)  
    response = ResponseRunCode(return_code=result.returncode, stdout=result.stdout, stderr=result.stderr)
    return response

