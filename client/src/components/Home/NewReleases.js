import React from 'react';
import '../../css/NewReleases.css';

function NewReleases() {
    const releases = [
        { title: "I Guess It's Fine", artist: "Roan" },
        { title: "i know u been stressed", artist: "bryce hase" },
        { title: "break away", artist: "SB Hunt" },
        { title: "sorry not sorry", artist: "H" },
        { title: "feel the same", artist: "lil biscuit" }
    ];

    return (
        <div className="new-releases">
            <h2>New Releases By Artists You Follow</h2>
            <div className="release-items">
                {releases.map((release, index) => (
                    <div key={index} className="release-item">
                        <p>{release.title}</p>
                        <p className="small">{release.artist}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewReleases;
