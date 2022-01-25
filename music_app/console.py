# from models.album import Album
# import repositories.album_repository as album_repository 
from models.artist import Artist
import repositories.artist_repository as artist_repository

artist1 = Artist("Fleetwood Mac")
artist_repository.save(artist1)
artist2 = Artist("Oasis")
artist_repository.save(artist2)