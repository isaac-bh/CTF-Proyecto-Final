import React, { useState, useEffect } from 'react'
import { Descarga } from './Descarga';
import axios from 'axios';
import alertify from 'alertifyjs';
import { Buffer } from "buffer";
import 'alertifyjs/build/css/alertify.css';
import './styles/switch.css'


export const App = () => {
  const [cifrar, setCifrar] = useState(true);
  const [img, setImg] = useState({ "file" : null, "preview" : "" } );
  const [cifrada, setCifrada] = useState("");
  const [texto, setTexto] = useState(""); 
  

  const handleImagen = (event) => {
    event.preventDefault();
    setImg({
      ...img,
      ["preview"] : URL.createObjectURL(event.target.files[0]),
      ["file"] : event.target.files[0]
    });
  }


  const handleText = (event) => {
    setTexto(event.target.value);
  }


  const descifrarImagen = async () => {
    try {
      const formData = new FormData();
      formData.append("image", img.file);
      await axios({
        method: "POST",
        url: "http://45.79.61.211/api/decode",
        data: formData,
      }).then((response) => {
        document.getElementById("dropzone-file2").value = response.data.message;
      });
      alertify.success("Imagen descifrada");

    } catch (e) {
      alertify.error("Algo salio mal");
      console.log(e);
    }
  }


  const procesarImagen = async (event) => {
    event.preventDefault();
    if (img.file) {
      if (cifrar) {
        if (texto != "") {
          try {
            const formData = new FormData();
            formData.append("image", img.file);
            formData.append("msg", texto)
            await axios({
              method: "POST",
              url: "http://45.79.61.211/api/encode",
              data: formData,
              responseType: 'arraybuffer'
            }).then((response) => {
              let base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
              let srcValue = "data:image/png;base64," + base64ImageString
              setCifrada(srcValue);
            });
            alertify.success("Texto cifrado");
    
          } catch (e) {
            alertify.error("Algo salio mal");
            console.log(e);
          }
        } else {
          alertify.warning("Nada para cifrar...")
        }
      } else {
        descifrarImagen();
      }
    } else {
      alertify.warning("Ingrese una imagen");
    }
  }


  return (
    <div className='w-screen h-screen bg-blue-900 text-slate-800 py-4'>
      <h1 className='text-xl font-black text-white text-center'>
        Esteganografía Express para moviles
      </h1>
      <div className=' w-5/6 h-23 my-10 mx-auto bg-gray-800 rounded-lg flex flex-col p-4
          justify-between text-white
      '>
          <p className=' text-2xl text-center font-bold'>
            Elige una opción: 
          </p>

          <div className='flex mx-auto my-4'>
            <label className='mr-2'> Cifrar </label>
            <input className='sw' type="checkbox" id="switch" onChange={() => setCifrar(!cifrar)} />
            <label className='lbl_sw h-6 w-12' for="switch">Toggle</label>
            <label className='ml-2'> Descifrar </label>
          </div>

        <div className='grid justify-around p-4 h-full sm:grid-cols-2'>
          <div className="block items-center justify-center m-1" >
            <label for="dropzone-file1" className="flex flex-col items-center justify-center w-full h-full mr-4 border-2 rounded-lg 
                p-4 border-dashed border-white border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-800
                " style={{ backgroundImage: "url(" + img.preview + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }} name="img">
                {
                  (img.file === null) ?
                    <>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-100" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
                            strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 
                            9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-100 dark:text-gray-400">
                          <span className="font-semibold">Subir </span>
                          imagen
                        </p>
                      </div>
                    </>
                  :
                  <></>
                }
                <input id="dropzone-file1" type="file" className="hidden" name="img" accept='image/png' onChange={ handleImagen }/>
            </label>
          </div> 
          <div className="block items-center justify-center m-1 my-4">
              <textarea id="dropzone-file2" type="text" maxLength="100" name="msg" className='flex w-full
                h-full mr-4 border-2 rounded-lg p-4 border-dashed border-white border-2 border-dashed rounded-lg cursor-pointer 
                bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-800
                outline-none
              ' placeholder={ cifrar ? "Ingrese el texto a cifrar" : "Texto descifrado..." } onChange={ handleText }/>
          </div> 
        </div>

        <div className={cifrar ? `grid justify-around sm:grid-cols-2` : `grid sm:grid-cols-1`}>
          {
            cifrar ?
              <Descarga cifrar={ cifrar } cifrada={ cifrada }/>
            :
              <></>
          }
          <button className="my-2 mx-auto w-40 border-none rounded-full px-4 bg-blue-800 hover:bg-blue-900 focus:outline-none 
              font-medium rounded-lg text-white py-1" onClick={ procesarImagen }> 
              { cifrar ? "Cifrar" : "Descifrar " } 
          </button>
        </div>
      </div>

      <div className='font-light w-full text-center text-white'>
        <p>Computación Tolerante a Fallas - D06 - <span>Isaac Benavides, Isaac Lomelí, Jonathan Romo</span></p>
      </div>
    </div>
  )
}
