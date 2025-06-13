from pydantic import BaseModel
from enum import Enum

# TODO: Add support for more languages
class Language(str, Enum):
    PYTHON = "python"
    # JAVASCRIPT = "javascript"

class RequestRunCode(BaseModel):
    code: str
    language: Language = Language.PYTHON

class ResponseRunCode(BaseModel):
    return_code: int
    stdout: str
    stderr: str

class RequestDataStructureCode(BaseModel):
    code: str
    language: Language = Language.PYTHON
    type: str

class DataStructureStep(BaseModel):
    step: int
    state: list

class ResponseDataStructureCode(BaseModel):
    type: str
    history: list[DataStructureStep]