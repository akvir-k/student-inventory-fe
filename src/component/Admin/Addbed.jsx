import React, { useState } from 'react';
import Axios from 'axios';
import AdminNav from '../Navigation/AdminNav';
import swap from 'sweetalert';



const Addbed = ({history}) => {

    const [bedValue, setBedData] = useState({
        bed: "",
        side: "",
        roomNo: ""
    })

    const onsubmit = (event) => {
        event.preventDefault(event)
    }

    const onchange = (event) => {
        const { name, value } = event.target

        setBedData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
    const submit = () => {
        let token = localStorage.getItem('token')
        let key = localStorage.getItem('key')
        Axios.post("http://localhost:4000/addbed", {
            bedValue,
            forverify: token,
            secrateKey: key

        }).then((result) => {
            console.log(result)
            if (result.data.length > 0) {
                swap({
                    text: "Bed Added Successfully",
                    button: "Done"
                })
            } else {
                swap({
                    text: result.data.code,
                    button: "Try Again"
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <AdminNav />
            <div className="main_bed">
                <div className='bed_container'>
                    <div className="bed_heading">
                        <h3> ADD BED HERE...</h3>
                    </div>
                    <br></br>
                    <div className="bed">
                        <form onSubmit={onsubmit} className="bed_form">
                            <input type='number'
                                placeholder="Add Bed No"
                                onChange={onchange}
                                name='bed'
                                value={bedValue.bed}
                            />
                            <br />
                            <input type="text"
                                placeholder="Side of Bed"
                                onChange={onchange}
                                name="side"
                                value={bedValue.side}
                            />
                            <br />
                            <input type="text"
                                placeholder="Room No"
                                onChange={onchange}
                                name="roomNo"
                                value={bedValue.roomNo}
                            />

                            <br /><br />
                            <button onClick={submit}> Add Bed</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addbed;