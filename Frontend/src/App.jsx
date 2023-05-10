import React from 'react'

export const App = () => {
  return (
    <div className='w-screen h-screen bg-blue-300 text-slate-800 p-4'>
      <h1 className='text-5xl font-black text-center'>
        Esteganografía Express
      </h1>
      <div className=' w-2/3 h-2/3 my-10 mx-auto bg-blue-200 rounded-lg flex flex-col p-4
          justify-between
      '>
        <p className=' text-3xl text-center flex-none'>
          Elige una opción:
        </p>
        <div className='flex justify-around p-4 h-full'>
              <div class="flex items-center justify-center w-1/2">
                  <label for="dropzone-file1" class="flex flex-col items-center justify-center w-full h-full mr-4 border-2 rounded-lg 
                      p-4 border-dashed border-black border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 
                      dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600
                  ">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                              stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 
                                9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Cifrar </span>
                            en imagen
                          </p>
                      </div>
                      <input id="dropzone-file1" type="file" class="hidden" />
                  </label>
              </div> 
              <div class="flex items-center justify-center w-1/2">
                  <label for="dropzone-file2" class="flex flex-col items-center justify-center w-full h-full mr-4 border-2 rounded-lg 
                      p-4 border-dashed border-black border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 
                      dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600
                  ">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                              stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 
                                9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Decifrar </span>
                            imagen
                          </p>
                      </div>
                      <input id="dropzone-file2" type="file" class="hidden" />
                  </label>
              </div> 
        </div>
      </div>
    </div>
  )
}
