import os
import shutil
from os import path, remove, environ
import aspose.words as aspose

def prepare(file, converted):
    temp = 'temp'
    try:
        shutil.copy(file, temp)
    except FileNotFoundError:
        return f'The "{path.basename(file)}" file not found !'
    def convert():
        original = f'{temp}/{path.basename(file)}'
        doc = aspose.Document(original)
        desktop = path.join(path.join(environ['USERPROFILE']), 'Desktop')
        result = path.join(desktop, f"{path.splitext(path.basename(file))[0]}.{converted}")
        doc.save(result)
        os.remove(original)

    convert()

# prepare(file, converted) - сюда пути к файлам и тип файла
# Результат будет сохрнен на раб.столе