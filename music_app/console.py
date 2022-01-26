from models.album import Album
import repositories.album_repository as album_repository 
from models.artist import Artist
import repositories.artist_repository as artist_repository

artist1 = Artist("Fleetwood Mac")
artist_repository.save(artist1)
artist2 = Artist("Oasis")
artist_repository.save(artist2)

album1 = Album("Landslide", "rock", artist1)
album_repository.save(album1)
album2 = Album("Wonderwall", "90's", artist2)
album_repository.save(album2)

print(artist_repository.select(0))


