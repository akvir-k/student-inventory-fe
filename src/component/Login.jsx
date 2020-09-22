import React, { useState } from 'react';
import axios from 'axios';
import sweetalert from 'sweetalert'
import Nav from './Navigation/Nav';



const Login = ({ history }) => {


    const [name, setvalue] = useState({
        user: "",
        password: "",
    })
    const [signinType, setSigninType] = useState('');

    const click = (event) => {
        const { name, value } = event.target
        setvalue((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })

    }

    const onsubmit = (event) => {
        event.preventDefault()

    }

    const submit = async () => {


        if (signinType === "student") {
            axios.post('http://localhost:4000/login/student', {
                email: name.user,
                password: name.password

            })
                .then((result) => {
                    console.log(result.data.length)
                    if (result.data.key === "student") {

                        localStorage.setItem("token", result.data.token)
                        localStorage.setItem('key', result.data.key)
                        sweetalert({
                            text: "Sucessfully Login",
                            button: "Awasome",
                            closeOnConfirm: false,
                        }).then((confirm => {
                            if (confirm) {
                                history.push('/user/userHome')
                            }
                        }))


                        let storage = localStorage.getItem("key")
                        console.log(storage)
                    }
                    else {
                        console.log(result)
                        sweetalert("You don't have a authorization. Please signup as a student", {
                            button: "Admin Signup"
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else if (signinType === "admin") {
            axios.post('http://localhost:4000/login/admin', {
                email: name.user,
                password: name.password
            })
                .then((result) => {
                    console.log(result)
                    if (result.data.key === "admin") {

                        localStorage.setItem("token", result.data.token)
                        localStorage.setItem('key', result.data.key)
                        sweetalert("successfully login", {
                            button: "Awasome",
                            icon: "success"
                        }).then(detail => {
                            history.push('/admin_home')
                        })
                    }
                    else {
                        sweetalert("You don't have a authorization. Please signup as a admin", {
                            button: "Ok"
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })

        }
        else {
            window.alert("please choose login value")
            return
        }

    }

    function onChange(event) {
        const { value } = event.target;

        setSigninType(value)
    }



    return (
        <>
            <Nav/> 
            <div className="main_div">
                <div className="box">
                    <h1 className=" login_head">Student Login </h1>
                    <img src="login_icon.jpeg" alt="loginICon"></img>
                    <form onSubmit={onsubmit} >
                        <div className="inputBox">

                            <input
                                type="text"
                              
                              
                                name='user'
                                onChange={click}
                                value={name.user}
                                autoComplete="off"
                                required="email" />
                            <label> username/Email</label>
                        </div>
                        <div className="inputBox">  
                            <input
                                type="password"
                            
                             
                                name='password'
                                onChange={click}
                                value={name.password}
                                autoComplete="off"
                                required="password" />
                            <label>Password</label>

                            <select onClick={onChange}>
                                <option > choose login</option>
                                <option
                                    value="student">
                                    Student Login
                                    </option>

                                <option value="admin">
                                    Admin Login
                                    </option>
                            </select>
                            <br />
                            <br />
                            <button onClick={submit}>submit me</button>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}


export default Login;