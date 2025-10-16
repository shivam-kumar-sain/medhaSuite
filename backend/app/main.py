from fastapi import FastAPI

app = FastAPI(title="MedhaSuite API", version="1.0")

@app.get("/")
def read_root():
    return {"message": "Welcome to MedhaSuite API 🚀"}
