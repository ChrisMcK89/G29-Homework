class Room:
    def __init__(self, room_name, capacity, fee):
        self.room_name = room_name
        self.guests = []
        self.songs = []
        self.capacity = capacity
        self.fee = fee
    
    def add_guest(self, guest):
        self.guests.append(guest)

    def add_song(self, song):
        self.songs.append(song)

    def remove_guest(self, guest):
        self.guests.remove(guest) 

    def room_is_full(self):
        if len(self.guests) > self.capacity:
            return "room full"
        else:
            return "space in room"




    

    

    
    
    
    
    
    
    
    
    
    
    
    





  
