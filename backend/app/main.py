from fastapi import FastAPI
from app.routes import auth
from app.db.database import Base, engine

app = FastAPI(title="MedhaSuite API", version="1.0")

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)
    print("✅ Database tables created or verified successfully")

# ✅ Register routes
app.include_router(auth.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to MedhaSuite API 🚀"}
