import React, { useState }from 'react'
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    
    const { username } = useParams();   // grab username from parameters defined somewhere, forgot
    const [file, setFile] = useState(null)

    function handleFileChange(e) {
        // e.preventDefault();
        console.log("e:", e)
        const selectedFile = e.target.files[0];
        console.log("file info!:", selectedFile)

        if (selectedFile) {
            const fileName = selectedFile.name;
            console.log("sliced file:", fileName.slice(-4).toLowerCase())

            const isWav = fileName.slice(-4).toLowerCase() === ".wav"
            if (isWav) {
                setFile(e.target.files[0]);
            }
            else {
                console.log("Please selected a .wav file")
            }
        }
    }

    function handleUpload(e) {
        e.preventDefault(); // prevent page reload
        if (file) {
            console.log("file selected", file.name)
        }
        else {
            console.log("no file selected")
        }
    }

    return (
        <div>
            <h1> user profile for { username }</h1>

            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    onChange={ handleFileChange }
                />
                <button>Submit</button>
            </form>
            { file && file.name }
        </div>
    )
}