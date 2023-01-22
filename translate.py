#pip install googletrans==4.0.0rc1
import googletrans


def translation(textIn):
    translator = googletrans.Translator()
    return translator.translate(textIn, dest="en").text



print(translation("明天你要做什么"))
