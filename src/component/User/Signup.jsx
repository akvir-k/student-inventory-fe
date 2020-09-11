import React, { useState } from "react";
import axios from 'axios';
import sweetalert from 'sweetalert';
import Nav from '../Navigation/Nav';


const Signup = ({ history }) => {
    const [name, setvalue] = useState({
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        password: ""
    })

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

    const submit = () => {
        axios.post('http://localhost:4000/signup/student', {
            name
        }).then(async (result) => {
            console.log(result)

            if (result.data[0] > 0) {
                sweetalert({
                    text: "Account Created Successfully",
                    button: "Login",
                    closeOnConfirm: false,
                }).then(detail => {
                    history.push('/login')
                })

            }
            else if (result.data.code == "ER_DUP_ENTRY") {
                sweetalert({
                    text: "Account already created",
                    icon: "warning",
                    button: "Login"
                }).then(detail => {
                    history.push('/login')
                })
            };
        })

    }

    console.log(name)
    return (
        <>
            <Nav />
            <div className="form_data">
                <div className="signup-form">
                    <form onSubmit={onsubmit} className="form">
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>

                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="text"
                                        className="form-control"
                                        name="firstName"
                                        placeholder="First Name"
                                        required="required"
                                        onChange={click}
                                        value={name.firstName}
                                    /></div>
                                <div className="col">
                                    <input type="text"
                                        className="form-control"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required="required"
                                        onChange={click}
                                        value={name.lastName}
                                    /></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number"
                                className="form-control"
                                name="mobileNo"
                                placeholder="Mobile No"
                                required="required"
                                onChange={click}
                                value={name.mobileNo}

                            />
                        </div>
                        <div className="form-group">
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                required="required"
                                onChange={click}
                                value={name.email}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={click}
                                value={name.password}
                                required="required"
                            />
                        </div>

                        <button onClick={submit}>Signup Form</button>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;
