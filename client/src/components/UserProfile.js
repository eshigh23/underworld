import React, { useState }from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

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
            console.log("sliced file:", fileName.slice(-4).toLowerCase())   // check if selected file is .wav

            const isWav = fileName.slice(-4).toLowerCase() === ".wav"
            if (isWav) {
                setFile(e.target.files[0]);
            }
            else {
                console.log("Please selecte a .wav file")   // prompts user to select a file in correct format
            }
        }
    }

    async function handleUpload(e) {
        e.preventDefault(); // prevent page reload
        if (file) {
            console.log("file selected", file.name)
            
            const formData = new FormData();
            formData.append('file', file)
            formData.append('username', username)
            try {
                const result = await axios.post('http://localhost:5002/uploadFile', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log("upload successful", result.data)
            }
            catch (e) {
                console.error("Upload not successful", e)
            }
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