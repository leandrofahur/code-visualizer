from pydantic import BaseModel
from enum import Enum

# TODO: Add support for more languages
class Language(str, Enum):
    PYTHON = "python"
    # JAVASCRIPT = "javascript"

class RequestRunCode(BaseModel):
    code: str
    language: Language = Language.PYTHON
