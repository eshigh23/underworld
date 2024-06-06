import React from 'react';
import '../../css/PersonalizedPlaylist.css';
import Carousel from '../Carousel.js';

function PersonalizedPlaylist() {
    // Dummy data for playlist items
    const playlists = [
        { src: 'hawaii.jpg', title: 'If I Die 2Day', artist: 'Rose the Soldier' },
	{ src: 'hawaii.jpg', title: 'hurts', artist: 'rmtctrl' },
	{ src: 'hawaii.jpg', title: 'time falls like moonlight', artist: 'City Girl' },
	{ src: 'hawaii.jpg', title: 'Undo', artist: 'Rose the Soldier' },
	{ src: 'hawaii.jpg', title: 'Talks With Kuv', artist: 'Kuvoor' },
    ];

    return (
        <div className="personalized-playlist">
            <h2>Your Personalized Playlist</h2>
            {/*<div className="playlist-items">
                {playlists.map((playlist, index) => (
                    <div key={index} className="playlist-item">
                        <p>{playlist.title}</p>
                        <p className="small">{playlist.artist}</p>
                    </div>
                ))}
		</div>*/}
	    <Carousel images={playlists} />
        </div>
    );
}

export default PersonalizedPlaylist;
