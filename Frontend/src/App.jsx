import React from 'react'

export const App = () => {
  return (
    <div className='
        w-screen 
        h-screen
        bg-blue-300
        text-slate-800
        p-4
    '>
      <h1 className='
        text-5xl
        font-black
        text-center
      '>
        Esteganografía Express
      </h1>
      <div className='
        w-2/3
        h-2/3
        my-10
        mx-auto 
        bg-blue-200 
        rounded-lg
        flex
        flex-col
        p-4
        justify-between
      '>
        <p className='
          text-3xl
          text-center
          flex-none
        '>
          Elige una opción:
        </p>
        <div className='flex justify-around p-4 h-full'>
          <div className='w-1/2 h-full mr-4 border-2 rounded-lg p-4 border-dashed border-black'>
            Drag & Drop
          </div>
          <div className='w-1/2 h-full ml-4 border-2 rounded-lg p-4 border-dashed border-black'>
            Drag & Drop
          </div>
        </div>
      </div>
    </div>
  )
}
