import eel
import aspose.words as aspose

eel.init('web')

@eel.expose
def convert(original, converted):
    doc = aspose.Document(original)
    doc.save(f"RESULT[{original}].{converted}")

eel.start('conv.htm', size = (576, 720))