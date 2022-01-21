from models.event import *


event1 = Event("23/01/22", "codefest", "20", "side room", "Codeing get together for all the geeks!")
event2 = Event("03/02/22", "music-mayhem", "300", "main hall", "Music festival with all your favourite acts!")

events = [event1, event2]

def add_new_event(event):
    events.append(event)