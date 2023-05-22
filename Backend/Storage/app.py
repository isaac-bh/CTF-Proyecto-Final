import os
from fastapi import FastAPI, File, HTTPException, UploadFile, Form
import datetime
from PIL import Image

app = FastAPI()
UPLOAD_DIR = "static/"


@app.post("/upload")
async def upload_image(msg: str = Form(...), image: UploadFile = File(...)):
    try:
        now = datetime.datetime.now()
        
        txt_file = f"{now.strftime('%Y-%m-%d_%H-%M-%S')}.txt"
        file_txtpath = os.path.join(UPLOAD_DIR, txt_file)

        with open(file_txtpath, "w") as file:
            file.write(msg)

        
        img_file = f"{now.strftime('%Y-%m-%d_%H-%M-%S')}.png"
        img_txtpath = os.path.join(UPLOAD_DIR, img_file)
        contents = await image.read()
        with open(img_txtpath, "wb") as f:
            f.write(contents)

        return HTTPException(200, "Done")
    except:
        return HTTPException(500, "Something failed")


@app.get("/images")
async def list_images():
    images = [f for f in os.listdir(UPLOAD_DIR) if os.path.isfile(os.path.join(UPLOAD_DIR, f))]
    return {"images": images}
