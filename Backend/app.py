from fastapi import FastAPI, File, UploadFile, Form
from estenografia import encode, decode
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from PIL import Image
from io import BytesIO


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["+"],
    allow_headers=["*"],
)


@app.post("/encode")
async def encode_route(msg: str = Form(...), image: UploadFile = File(...)):
    image_data = await image.read()
    img = Image.open(BytesIO(image_data))

    new_img = encode(img, msg)
    image_bytes = BytesIO()
    new_img.save(image_bytes, format="png")
    image_bytes.seek(0)

    return StreamingResponse(image_bytes, media_type="image/png")


@app.post("/decode")
async def decode_route(image: UploadFile = File(...)):
    image_data = await image.read()
    img = Image.open(BytesIO(image_data))
    
    msg = decode(img)
    return {"message": msg}


@app.get("/")
async def root():
    return {"message": "/encode o /decode"}