from db.run_sql import run_sql
from models.artist import Artist
from models.album import Album

def save(artist):
    sql = f"INSERT INTO artists (name) VALUES (%s) RETURNING *"
    values = [artist.name]
    results = run_sql(sql, values)
    id = results[0][0]
    artist.id = id
    return artist