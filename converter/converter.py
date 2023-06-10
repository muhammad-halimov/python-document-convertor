from eel import init, start, expose
from os import path, environ
import aspose.words as aspose

init('app')

@expose
def convert(original, converted):
    document = aspose.Document(original)
    desktop = path.join(path.join(environ['USERPROFILE']), 'Desktop')
    result = path.join(desktop, f"{path.splitext(original)[0]}.{converted}")
    document.save(result)

start('main_eng.htm', size = (576, 920))