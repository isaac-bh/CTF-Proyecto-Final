import alertify from 'alertifyjs';
import { saveAs } from 'file-saver';

export const Descarga = ({cifrar, cifrada}) => {
    const downloadImage = () => {
        if (cifrada) {
            saveAs(cifrada, 'image.png');
        } else {
            alertify.warning("No hay nada para descargar");
        }
    }

    return <button className="my-2 mx-auto w-40 border-none rounded-full px-4 bg-green-800 hover:bg-green-900 focus:outline-none 
    font-medium rounded-lg text-white py-1" disabled={ !cifrar } onClick={ downloadImage }> Descargar </button>
  }