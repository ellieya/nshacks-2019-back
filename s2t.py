import speech_recognition as sr
import sys

r = sr.Recognizer()
with sr.Microphone() as source:
    print('Begin speaking')
    audio = r.listen(source)

try:
    print('You said: ' + r.recognize_google(audio))
    wordsArr = r.recognize_google(audio).split(" ")
    print(wordsArr)
except:
    pass

def search():
    keywords = ['food', 'shelter', 'drugs', 'church', 'hospital']
    for word in wordsArr:
        if word in keywords:
            return word
    return -1

result = search()
print(result)


        

