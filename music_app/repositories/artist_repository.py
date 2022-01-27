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

def delete_all():
    sql = "DELETE FROM artists"
    run_sql(sql)

def select(id):
    artist = None
    sql = "SELECT * FROM artists WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)[0]
    if result is not None:
        artist = artist(result['name'], result['artist_id'])
    return artist

