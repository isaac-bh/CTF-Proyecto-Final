# Convertir la información a binario
def data_to_binary(data):
        bin = []

        for i in data:
            bin.append(format(ord(i), '08b'))

        return bin


# Se modifican los bits menos 
# significativos de la imágen
def mod_pixels(pixels, data):
    data_aux = data_to_binary(data)
    size_data = len(data_aux)
    image_data = iter(pixels)

    for i in range(size_data):
        pixels = [value for value in image_data.__next__()[:3] + image_data.__next__()[:3] + image_data.__next__()[:3]]

        for j in range(0, 8):
            if (data_aux[i][j] == '0' and pixels[j]% 2 != 0):
                pixels[j] -= 1

            elif (data_aux[i][j] == '1' and pixels[j] % 2 == 0):
                if(pixels[j] != 0):
                    pixels[j] -= 1
                else:
                    pixels[j] += 1

        if (i == size_data - 1):
            if (pixels[-1] % 2 == 0):
                if(pixels[-1] != 0):
                    pixels[-1] -= 1
                else:
                    pixels[-1] += 1

        else:
            if (pixels[-1] % 2 != 0):
                pixels[-1] -= 1

        pixels = tuple(pixels)
        yield pixels[0:3]
        yield pixels[3:6]
        yield pixels[6:9]


# Se modifica la copia de la imagen
# con los pixeles modificados
def encode_img(new_img, data):
    w = new_img.size[0]
    (x, y) = (0, 0)

    for pixel in mod_pixels(new_img.getdata(), data):
        new_img.putpixel((x, y), pixel)
        if (x == w - 1):
            x = 0
            y += 1
        else:
            x += 1


# Codificar datos en una imagen
def encode(image, data):
    if (len(data) == 0):
        raise ValueError('Data is empty')

    new_img = image.copy()
    encode_img(new_img, data)

    return new_img


# Decodificar datos en una imagen
def decode(img):
    data = ''
    img_data = iter(img.getdata())

    while (True):
        pixels = [value for value in img_data.__next__()[:3] + img_data.__next__()[:3] + img_data.__next__()[:3]]
        bin_str = ''

        for i in pixels[:8]:
            if (i % 2 == 0):
                bin_str += '0'
            else:
                bin_str += '1'

        data += chr(int(bin_str, 2))
        if (pixels[-1] % 2 != 0):
            return data