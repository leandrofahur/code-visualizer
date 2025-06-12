const API_BASE_URL = 'http://localhost:8000/api/v1';

export const api = {
  async runCode(code: string, language: string) {
    const response = await fetch(`${API_BASE_URL}/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, language }),
    });
    return response.json();
  },

  async checkHealth() {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
    });
    return response.json();
  },
}; 