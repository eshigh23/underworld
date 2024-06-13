import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [notification, setNotification] = React.useState('')
    const navigate = useNavigate(); 

    function handleChange(e){
        const {name, value} = e.target;
        console.log(formData.username)
        console.log(formData.password)

        setFormData({
            ...formData, 
            [name]: value
        })
    }

    // calls login API on form submit to validate credentials, receives jwt token from server and saves it in local storage
    async function handleSubmit(e){
        e.preventDefault()
        try {
            console.log(formData.username, formData.password)
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
        <>
            { notification ? <p> {notification} </p> : ''}

            <form onSubmit={handleSubmit}>
                <br></br>
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        required={true}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label> Password: 
                    <input
                        type= "password"
                        name= "password"
                        value= {formData.password}
                        required={true}
                        onChange={handleChange}
                    />
                </label>
                <button> Login </button>
            </form>
        </>
    )

}