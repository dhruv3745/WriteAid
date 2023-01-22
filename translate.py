#pip install googletrans==4.0.0rc1

import googletrans

textIn = "明天你要做什么"
translator = googletrans.Translator()
textOut = translator.translate(textIn, dest="en").text

print(textOut)
