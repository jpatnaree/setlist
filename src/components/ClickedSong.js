import React from 'react'

function ClickedSong() {

    return(
        <div className="song" >
            <img src=""/>
            <div className="song-info">
                <h3>SONG</h3>
                <h4>ARTIST</h4>
            </div>
            <button onClick={()=> console.log("Delete clicked...")}>X</button>
        </div>
    );
}

export default ClickedSong;