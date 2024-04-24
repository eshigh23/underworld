import React, { useState } from 'react';
import { Howl } from 'howler';

const Streamer = () => {
    var [isPlaying, setIsPlaying] = useState(false);
    var sound = new Howl({
        src: ['audio.wav'],
        html5: true,  // Enable HTML5 Audio to force audio streaming
        onplay: () => {
            setIsPlaying(true);
        },
        onpause: () => {
            setIsPlaying(false);
        },
        onend: () => {
            setIsPlaying(false);
        }
    });
    var song = null;
    
    const togglePlayPause = () => {
	console.log("toggle");
        /*if (sound.playing(song)) {
            sound.pause(song);
	    console.log("Song paused.");
        } else {
	    if(song != null){
		song = sound.play(song);
		console.log("Song resumed.");
	    }
	    else{
		song = sound.play();
		console.log("Song started.");
	    }
        }*/

	if(song == null){
	    song = sound.play();
	}
	else{
	    if(sound.playing(song)){
		sound.pause(song);
	    }
	    else{
		sound.play(song);
	    }
	}
    };

    return (
        <div>
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
	    <h1>
		{song ? song : 'NULL'}
	    </h1>
        </div>
    );
};

export default Streamer;
