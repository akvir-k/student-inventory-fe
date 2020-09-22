import Axios from 'axios';
import React, { useState, } from 'react';
import UserNav from '../Navigation/UserNav';
import sweet from 'sweetalert';
import { useLocation } from 'react-router-dom';


const Otp = ({history},props) => {


    const location=useLocation();
    
    const [otp, setotp] = useState(new Array(6).fill(""));
  
    
    
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setotp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const onsubmit=()=>{
        
        
       let GenerateOtp= (otp.join(""))
        
     
        if (GenerateOtp===JSON.stringify(location.state.otp)){
            if(location.state.newPassword!==""){
                Axios.put('http://localhost:4000/update/password',{
                    token:localStorage.getItem('token'),
                    key:localStorage.getItem('key'),
                    oldPassword:location.state.oldPassword,
                    newPassword:location.state.newPassword
                })
                .then((get_response)=>{
                    console.log(get_response)
                    if(get_response.data[0]>0){
                        sweet({
                            text:" OTP Verfied! password update successfully",
                            button:"success",
                            icon:'success'
                        })
                        .then(()=>{
                            history.push('/student/update')
                        })
                    }else{
                        sweet({
                            text:" Old password does not match",
                            button:"Try Again",
                            icon:'warning'
                        }).then(()=>{
                            history.push('/student/update')
                        })
                    }
                })
    
                
            }
            else if(location.state.image!==""){

                const data = new FormData();
                data.append('file', location.state.image);
                data.append('upload_preset', 'Navgurukul_image')

                
                fetch('https://api.cloudinary.com/v1_1/virusaman/image/upload', {
                    method: 'POST',
                    body: data
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res)
                    Axios.put('http://localhost:4000/update/image', {
                        url: res.secure_url,
                        token: localStorage.getItem('token'),
                        key: localStorage.getItem('key')
                    })
                        .then(insert_resp => {

                            if (insert_resp.data.length > 0) {
                                sweet({
                                    text: " Image updated Successfully",
                                    icon: "success",
                                    button: "ok"
                                })
                            }else{

                            }
                        })
                })
                .catch(err=>{
                    console.log(err); throw err;
                })
               
            }
            
        }
        else{
            sweet({
                text:" Wrong Otp entered",
                button:"Try Again",
                icon:'warning'
            })
           
        }   
        
    }

    return (
        <>
            <UserNav />
            <div className="Header_otp">
                <div className="row_otp">
                    <div className="otp_class">
                        <h2 id="otp_header">
                            otp verification
                        </h2>
                        <p id="info_otp">
                            Enter OTP here which you received on you Contact No.
                        </p>

                        {otp.map((value, index) => {
                            return (
                              
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={value}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}

                                />
                              
                            );
                        })}

                        <p id="check_otp"> Otp entered: {otp}</p>
                        <p class="Submit_button">
                            <button className="btn btn-secondary mr-2"
                                onClick={e => setotp([...otp.map(value => "")])}>
                                Clear
                    </button>
                            <button className="btn btn-primary " onClick={onsubmit}>
                                verify Otp
                    </button>
                        </p>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp;