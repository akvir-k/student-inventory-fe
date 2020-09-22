import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import UserNav from '../Navigation/UserNav';
import sweet from 'sweetalert';


const Update = ({history}) => {

    const token=localStorage.getItem('token')
    const key= localStorage.getItem('key')
    
    //image update
    const[image,setImage]=useState()

    //password update
    const [name, setvalue] = useState({
        oldP: "",
        newP: ""
    })
    console.log(image)

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

    const changePassword=()=>{
        
        Axios.put("http://localhost:4000/createOtp",{
            Token:token,
            Key:key
        })
        .then((received_resp)=>{
          if(received_resp){
            
            let saveDict={
                "oldPassword":name.oldP,
                "newPassword":name.newP,
                "otp":received_resp.data,
                "image":image
            }
            
            sweet({
                text:" Otp sent on your Email",
                buttons:"Ok",
                icon:"success"
            }).then(()=>{
                localStorage.setItem('verify',JSON.stringify(saveDict))
                history.push({
                    pathname:'/student/otpverify',
                    state:saveDict
                })
            })
          }

        })

    }

  
    
    return (
        <>
            <UserNav />
            <div className="update_main">
                <div className="parent_main">
                    <div className="parent_heading">
                        <h2> Update Student Information... </h2>
                    </div>
                    <br />
                    <div className="form-data">
                        <h3 id="password_change">change password..</h3>
                        <form className="update_data" onSubmit={onsubmit}>
                            <div className="input">
                                <label > Old password: </label>
                                <input 
                                    type="password"
                                    placeholder="type old password" 
                                    name="oldP" 
                                    onChange={click}
                                    value={name.oldP}
                                    required 
                                />
                            </div>
                            <div className="input">
                                <label> New password: </label>
                                <input 
                                    type="password"
                                    name="newP"
                                    placeholder="type New password"
                                    onChange={click}
                                    value={name.newP}
                                />
                            </div>
                            <button onClick={changePassword} className="btn btn-secondary"> Submit </button>
                        </form>

                        <form className="update_data1" onSubmit={onsubmit}>
                            <h3 id="update_image"> Update Image: </h3>
                            <div className="input_img">
                                <label> Upload New Picture: </label>
                                <input type="file"
                                    accept='png/jpeg'
                                    onChange={event => {
                                        const value = event.target.files[0]
                                        setImage(value)
                                    }}
                                    name='image'
                                    // className="change_img"
                                />
                                <button  onClick={changePassword} className="btn btn-primary"> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Update;
