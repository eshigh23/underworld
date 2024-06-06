import React from 'react';
import '../css/Sidebar.css';
import Streamer from "./Streamer";

function Sidebar() {
    const nowPlaying = {
        title: "Hawaii (Glo Gang)",
        artist: "Rose the Soldier"
    };

    const recommended = [
        { title: "Tokyo Roads II", artist: "Rose the Soldier" },
        { title: "Ion Rly Know", artist: "Rose the Soldier" },
        { title: "Tck Tock", artist: "California Unit (Glo Gang)" }
    ];

    return (
        <aside className="sidebar">
            <div className="now-playing">
                <h3>Now Playing</h3>
		<img src={'hawaii.jpg'} alt="Album Art" className="sidebar-image" />
		<Streamer />
                <p>{nowPlaying.title}</p>
                <p className="small">{nowPlaying.artist}</p>
            </div>

            <div className="recommended">
                <h3>Recommended</h3>
                {recommended.map((track, index) => (
                    <div key={index} className="recommendation">
                        <p>{track.title}</p>
                        <p className="small">{track.artist}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
