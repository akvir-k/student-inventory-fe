import React, { useState } from 'react';
import axios from 'axios';
import sweetalert from 'sweetalert'
import Nav from '../Navigation/UserNav';

const Upload = ({history}) => {


    const [img, setimg] = useState()
    // const [name, setname] = useState()
    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'Navgurukul_image')

    const onsubmit = (event) => {
        event.preventDefault()
    }

    const submit = async () => {

        let getToken = localStorage.getItem('token')
        let getKey = localStorage.getItem('key')
        await axios.post('http://localhost:4000/checkUpload', {
            token: getToken,
            key: getKey
        }).then( async(result) => {
            console.log(result)
            if (result.data.length > 0) {
                sweetalert({
                    text: 'Already uploaded',
                    icon: 'warning',
                    button: 'ok'
                })
            } 
            else {

                fetch('https://api.cloudinary.com/v1_1/virusaman/image/upload', {
                    method: 'POST',
                    body: data
                })
                .then(res=>res.json())
                .then( res=>{
                    
                    if (res) {
                        axios.post('http://localhost:4000/upload', {
                            data: res.secure_url,
                            token: localStorage.getItem('token'),
                            key: localStorage.getItem('key')
                        })
                            .then(insert_resp => {
                                console.log(insert_resp)
                                if (insert_resp.data.length > 0) {
                                    sweetalert({
                                        text: " Image uploaded Successfully",
                                        icon: "success",
                                        button: "ok"
                                    })
                                } else {
                                    sweetalert({
                                        text: insert_resp.data.code || "Upload Image Failed",
                                        icon: "failed",
                                        button: "Try Again"
                                    })
                                }
                            })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
                



            }
        })


    }

    // console.log(name)
    console.log(img)
    return (
        <>
            <Nav />
            <div className="student_container">
                <div className="AddStudent">
                    <form onSubmit={onsubmit}>
                        <h3>Upload Student Photo</h3>
                        <div className="form-group"><br />
                            <input type="file"
                                accept='png/jpeg'
                                onChange={event => {
                                    const value = event.target.files[0]
                                    setimg(value)
                                    // console.log(value)
                                }}
                                name='image'
                            />
                        </div>

                        <div className="form-group"><br />
                            <button onClick={submit} className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Upload;