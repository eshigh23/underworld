import React, { useState } from 'react';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import "../css/Streamer.css";

let sound = new Howl({
    src: ['audio.wav'],
    html5: true,  // Enable HTML5 Audio to force audio streaming
});

const Streamer = () => {
    var [isPlaying, setIsPlaying] = useState(false);

    var [song, setSong] = useState(null);
    
    const togglePlayPause = () => {
	console.log("toggle");

	if(song == null){
	    setSong(sound.play());
	    setIsPlaying(true);
	}
	else{
	    if(sound.playing(song)){
		sound.pause(song);
		setIsPlaying(false);
	    }
	    else{
		sound.play(song);
		setIsPlaying(true);
	    }
	}
    };

    return (
        <div>
            <button className="play-pause-btn" onClick={togglePlayPause}>
		<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
	    <h1>
		{song ? song : 'NULL'}
	    </h1>
        </div>
    );
};

export default Streamer;
