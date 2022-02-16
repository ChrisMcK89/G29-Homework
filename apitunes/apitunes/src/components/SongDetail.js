import React from "react";

const SongDetail = ({song}) => {

    return(
        <div>
            <h3>{song['im:name'].label}</h3>
        </div>
    )

}

export default SongDetail;