from models import Language
import subprocess

def run_code(code: str, language: Language) -> dict:
    '''
    @param code: str
    @param language: Language
    @return: str
    @description: Run the code using the selected language
    '''    
    if(language == Language.PYTHON):
        result = subprocess.run(["python", "-c", code], capture_output=True, text=True)
        return result    
    