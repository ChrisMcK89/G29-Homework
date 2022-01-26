from db.run_sql import run_sql
from models.album import Album
import repositories.artist_repository as artist_repository
from models.artist import Artist

def save(album):
    sql = f"INSERT INTO albums (title, genre, artist_id) VALUES (%s, %s, %s) RETURNING *"
    values = [album.title, album.genre, album.artist.id]
    results = run_sql(sql, values)
    id = results[0][0]
    album.id = id
    return album

def delete_all():
    sql = "DELETE FROM users"
    run_sql(sql)

def select(id):
    album = None
    sql = "SELECT * FROM albums WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)[0]
    if result is not None:
        artist = artist_repository.select(result['artist_id'])
        album = Album(result['title'], result['genre'], artist)
    return album