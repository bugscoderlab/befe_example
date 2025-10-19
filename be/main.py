from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.connection import create_tables
from routers import user

create_tables()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
	return {"message": "Hello World" }

app.include_router(user.router, prefix="/users", tags=["users"])