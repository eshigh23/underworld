import axios from 'axios';
import React, {useState} from 'react'

export default function Signup(){

    const [notification, setNotification] = useState(null)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }
    
    /* on form submit, make call to API endpoint 'signup'
    if username doesn't already exist, create user in database */
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("handle submit sanity check")

        try {
            const response = await axios.post('http://localhost:5002/signupUser', { username: formData.username, password: formData.password })
            if (response.data.success) {
                setNotification("You have signed up!")
            }
            setNotification(response.data.message)  // set success or failure message (received from signup endpoint)
        } catch (e) {
            console.log("could not sign up user", e)
        }
    }
    
    return(
        <>
        { notification ? notification : ""}
            <form onSubmit={handleSubmit}>
            <br></br>
                <label> Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required={true}
                    />
                </label>
                <br></br>
                <label> Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required={true}
                    />
                </label>
                <button>Signup</button>
            </form>
        </>
    )

}