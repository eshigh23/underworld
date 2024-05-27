import React from 'react'
import Streamer from './Streamer'
import NavBar from './NavBar';
import PersonalizedPlaylist from './Home/PersonalizedPlaylist';
import NewReleases from './Home/NewReleases';
import GenreFinder from './Home/GenreFinder';
import Sidebar from './Sidebar';
import "../css/App.css";

export default function Home(){
    return (
	<div>
	    <div className="App">
		<NavBar />
		<div className="main-layout">
                   
                    <div className="content-area">
			<PersonalizedPlaylist />
			<NewReleases />
			<GenreFinder />
                    </div>
		    <Sidebar />
		</div>
            </div>
	</div>
    )

}
