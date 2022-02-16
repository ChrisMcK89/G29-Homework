import React from "react";

const Film = ({name, children}) => {
    
    return(
        <>
        <h4><a href={children}>{name}</a></h4>
        
        </>
    )
}

export default Film;

