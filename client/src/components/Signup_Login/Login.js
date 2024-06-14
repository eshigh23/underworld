import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../css/Signup_Login.css';  // Importing CSS for styling

export default function Login(){

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [notification, setNotification] = React.useState('')
    const navigate = useNavigate(); 

    function handleChange(e){
        const {name, value} = e.target;

        setFormData({
            ...formData, 
            [name]: value
        })
    }

    // calls login API on form submit to validate credentials, receives jwt token from server and saves it in local storage
    async function handleSubmit(e){
        e.preventDefault()
        try {
            console.log("attempting login with credentials:", formData.username, formData.password)
            const response = await axios.post('http://localhost:5002/loginUser', { username: formData.username, password: formData.password })
            if (response.data.success){
                localStorage.setItem("token", response.data.token)
                console.log("Successfully logged in!")
                navigate('/')
            }
            setNotification(response.data.message)
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <div className="signuplogin-container">
            { notification ? <p> {notification} </p> : ''}

            <div className="signuplogin-box">
                <div className="signuplogin-black">LOGIN</div>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <label>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={formData.username}
                            required={true}
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label> 
                        <input
                            placeholder="Password"
                            type= "password"
                            name= "password"
                            value= {formData.password}
                            required={true}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="signuplogin-button"> SUBMIT </button>
                </form>
            </div>
        </div>
    )

}