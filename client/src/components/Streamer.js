import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import "../css/Streamer.css";

let sound;

const Streamer = () => {
    var [isPlaying, setIsPlaying] = useState(false);

    var [song, setSong] = useState(null);

    useEffect(() => {
	// Initialize Howl instance
	sound = new Howl({
	    src: ['audio.wav'],
	    html5: true,
	    onend: () => {
		console.log('Audio finished playing');
		setIsPlaying(false); // Update state to change button to play
	    }
	});

	return () => {
	    // Cleanup Howl instance on component unmount
	    sound.unload();
	};
    }, []);
    
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
        <div className="btn-container">
            <button className="play-pause-btn" onClick={togglePlayPause}>
			<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
			{/*<h1>
			{song ? song : 'NULL'}
			</h1>*/}
        </div>
    );
};

export default Streamer;
