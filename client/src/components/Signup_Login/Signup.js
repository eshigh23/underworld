import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../css/Signup_Login.css';  // Importing CSS for styling

export default function Signup(){

    const [notification, setNotification] = useState(null)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate(); // used for redirect on successful login

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
                setNotification("Successfully created account.")
                // log in the user on successful signup and redirect
                try {
                    const loginResponse = await axios.post('http://localhost:5002/loginUser', { username: formData.username, password: formData.password })
                    if (loginResponse.data.success){
                        localStorage.setItem("token", loginResponse.data.token)
                        console.log("sanity check: user logged in upon signup")
                        navigate('/')
                    }
                } catch (e) {
                    console.error("Could not login user upon signup")
                }
            }
            setNotification(response.data.message)  // set success or failure message (received from signup endpoint)
        } catch (e) {
            console.log("could not sign up user", e)
        }
    }
    
    return(
        <div className="signuplogin-container">
        { notification ? notification : ""}

        <div className="signuplogin-box">
        <div className="signuplogin-black">SIGN-UP</div>
            <form onSubmit={handleSubmit}>
            <br></br>
                <label> 
                    <input
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required={true}
                    />
                </label>
                <br></br>
                <label> 
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required={true}
                    />
                </label>
                <button className="signuplogin-button">SUBMIT</button>
            </form>
            <p>Already have an account? Log in <span> <a href="http://localhost:3000/login">here.</a></span></p>
            </div>
        </div>
    )

}