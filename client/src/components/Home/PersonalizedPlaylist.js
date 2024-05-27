import React from 'react';
import '../../css/PersonalizedPlaylist.css';

function PersonalizedPlaylist() {
    // Dummy data for playlist items
    const playlists = [
        { title: "If I Die 2Day", artist: "Rose the Soldier" },
        { title: "hurts", artist: "rmctrl" },
        { title: "time falls like moonlight", artist: "City Girl" },
        { title: "Undo", artist: "Rose the Soldier" },
        { title: "Talks With Kuv", artist: "Kuvvoor" }
    ];

    return (
        <div className="personalized-playlist">
            <h2>Your Personalized Playlist</h2>
            <div className="playlist-items">
                {playlists.map((playlist, index) => (
                    <div key={index} className="playlist-item">
                        <p>{playlist.title}</p>
                        <p className="small">{playlist.artist}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonalizedPlaylist;
