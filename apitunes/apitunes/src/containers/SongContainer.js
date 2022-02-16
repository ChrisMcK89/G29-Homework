import React, { useState, useEffect } from 'react';
import SongDetail from '../components/SongDetail';
import SongList from '../components/SongList';
import './SongContainer.css';
import SongSelector from '../components/SongSelect';


const SongContainer = () => {
    const [songs, setSongs] = useState(null);
    const [selectedSong, setSelectedSong] = useState(null);
    // const [key, setKey] = useState(null);

    useEffect(() => {
        getSongs();
      }, [])
  
      const getSongs = function(){
          fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
          .then(res => res.json())
          .then(data => setSongs(data.feed.entry))
      }
  
      const onSongClick = function(song){
          setSelectedSong(song);
      }


      return (
        <div className="main-container">
            
            <SongSelector songs={songs} onSongClick={onSongClick}/>
            {songs ? <SongList songs={songs}/> : null}
            {selectedSong ? <SongDetail song={selectedSong}/> : null}
            
        </div>
      )
  }
  


export default SongContainer;


