from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from PIL import Image
from io import BytesIO
import asyncio
import requests
import copy


app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/encode")
async def tu_endpoint(msg: str = Form(...), image: UploadFile = File(...)):
    contenido = await image.read()

    form_payload = {"msg": msg}
    file_payload = {"image": (image.filename, contenido, image.content_type)}
    file_storage_payload = {"image": (image.filename, contenido, image.content_type)}
    

    response = requests.post("http://ctf-backend-esteganografia-service:8000/encode", data=form_payload, files=file_payload)
    response_storage = requests.post("http://ctf-backend-storage-service:8000/upload", data=form_payload, files=file_storage_payload)
    #response = requests.post("http://127.0.0.1:8000/encode", data=form_payload, files=file_payload)
    #response_storage = requests.post("http://127.0.0.1:8001/upload", data=form_payload, files=file_storage_payload)

    if response.status_code == 200:
        return StreamingResponse(response.iter_content(chunk_size=1024), media_type=response.headers["Content-Type"])
    else:
        return {"message": "Error al obtener la respuesta de la otra API"}



@app.post("/decode")
async def tu_endpoint(image: UploadFile = File(...)):
    
    file_payload = {"image": (image.filename, image.file, image.content_type)}
    
    

    #response = requests.post("http://127.0.0.1:8000/decode", files=file_payload)
    response = requests.post("http://ctf-backend-esteganografia-service:8000/decode", files=file_payload)

    if response.status_code == 200:
        return StreamingResponse(response.iter_content(chunk_size=1024), media_type=response.headers["Content-Type"])
    else:
        return {"message": "Error al obtener la respuesta de la otra API"}

