import React from 'react';
import '../../css/NewReleases.css';
import Carousel from '../Carousel.js';

function NewReleases() {
    const releases = [
        { src: 'hawaii.jpg', title: 'I Guess It’s Fine', artist: 'Roan' },
	{ src: 'hawaii.jpg', title: 'i know u been stressed', artist: 'bryce hase' },
	{ src: 'hawaii.jpg', title: 'break away', artist: 'SB Hunt' },
	{ src: 'hawaii.jpg', title: 'sorry not sorry', artist: 'H' },
	{ src: 'hawaii.jpg', title: 'feel the same', artist: 'lil biscuit' },    ];

    return (
        <div className="new-releases">
            <h2>New Releases By Artists You Follow</h2>
            {/*<div className="release-items">
                {releases.map((release, index) => (
                    <div key={index} className="release-item">
                        <p>{release.title}</p>
                        <p className="small">{release.artist}</p>
                    </div>
                ))}
		</div>*/}
	    <Carousel images={releases} />
        </div>
    );
}

export default NewReleases;
