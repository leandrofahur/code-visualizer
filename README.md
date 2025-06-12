# Project - Code Visualizer + Algorithm Playground

## Objective
The goal of this project is to enable a visual representation of abstract data structures. The playground environment is designed for students and developers to visualize data structures such as: lists, trees, graphs, and stacks through a real-time step-by-step execution and AI-assiste explanations.

## Features
- Code editor **(left panel)**
- Data structure visualization **(right panel)**
- Run & step-through code execution
- Save and share algorithms
- LLM-powered explanations

## Tech Stack
- Frontend: Vite React App + Tailwind + D3.js
- Backend: FastAPI
- Database: PostgreSQL
- AI: Langchain with OpenAI agent
- Dev: Docker + Docker Compose

## Repository Structure
```bash
.code-visualizer/
├── frontend/      
├── backend/       
├── docker-compose.yml
└── README.md
```

## Running The Application
Run the frontend locally
```bash
$ npm run dev
```