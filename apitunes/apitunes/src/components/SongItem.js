import React from 'react';
import './SongItem.css';


const SongItem = ({song, position, onSongClick}) => {

  const handleClick = function(){
    onSongClick(song);
  }



  return <ul>
            <li onClick={handleClick}><h3>{position + 1}</h3></li>
            <li id="li-title" onClick={handleClick}>{song['im:name'].label}</li>
            <li onClick={handleClick}>{song['im:artist'].label}</li>
        </ul>
        
  
}

export default SongItem;