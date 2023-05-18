import alertify from 'alertifyjs';
import { saveAs } from 'file-saver';

export const Descarga = (cifrar, imagen) => {
    const downloadImage = () => {
        //Aqui falta algo :v
        const blob = new Blob([imagen], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        if (imagen) {
            saveAs(url, 'image.png');
        } else {
            alertify.warning("No hay nada para descargar");
        }
    }

    return <button className="my-2 mx-auto w-40 border-none rounded-full px-4 bg-green-300 hover:bg-green-400 focus:outline-none 
    font-medium rounded-lg text-white py-1" disabled={ !cifrar } onClick={ downloadImage }> Descargar </button>
  }