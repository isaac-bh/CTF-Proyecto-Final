import React, { useState, useEffect } from 'react'
import './styles/switch.css'


export const App = () => {
  const [img, setImg] = useState({ "file" : null, "preview" : "" } );
  const [cifrar, setCifrar] = useState(true);

  const handleImagen = (event) => {
    event.preventDefault();
    setImg({
      ...img,
      ["preview"] : URL.createObjectURL(event.target.files[0]),
      ["file"] : event.target.files[0]
    });
  }

  return (
    <div className='w-screen h-screen bg-blue-300 text-slate-800 p-4'>
      <h1 className='text-5xl font-black text-center'>
        Esteganografía Express
      </h1>
      <div className=' w-2/3 h-2/3 my-10 mx-auto bg-blue-200 rounded-lg flex flex-col p-4
          justify-between
      '>
          <p className=' text-3xl text-center'>
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
                p-4 border-dashed border-black border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 
                dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600
                " style={{ backgroundImage: "url(" + img.preview + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }} name="img">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                        stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 
                          9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Cifrar </span>
                      en imagen
                    </p>
                </div>
                <input id="dropzone-file1" type="file" className="hidden" accept='.png' onChange={ handleImagen }/>
            </label>
          </div> 
          <div className="block items-center justify-center m-1">
              <textarea id="dropzone-file2" type="text" maxLength="100" className='flex w-full
                h-full mr-4 border-2 rounded-lg p-4 border-dashed border-black border-2 border-dashed rounded-lg cursor-pointer 
                bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600
                outline-none
              ' placeholder={ cifrar ? "Ingrese el texto a cifrar" : "Texto descifrado..." }/>
          </div> 
        </div>
        <div className='grid justify-around sm:grid-cols-2'>
        <button className="my-2 mx-auto w-40 border-none rounded-full px-4 bg-green-300 hover:bg-green-400 focus:outline-none 
            font-medium rounded-lg text-white py-1" disabled={ cifrar } > 
            Descargar 
        </button>
        <button className="my-2 mx-auto w-40 border-none rounded-full px-4 bg-blue-400 hover:bg-blue-500 focus:outline-none 
            font-medium rounded-lg text-white py-1" > 
            { cifrar ? "Cifrar" : "Descifrar " } 
        </button>
        </div>
        
      </div>
    </div>
  )
}
