import React, { useEffect, useState } from 'react';
import swap from 'sweetalert';
import axios from 'axios';
import AdminNav from '../Navigation/AdminNav';

const Shuffule = (history) => {

    // const [suffuleData, SetSuffuleData] = useState([])
    useEffect(async () => {

        const token = await localStorage.getItem('token')
        const key = await localStorage.getItem('key')
        function shuffule_data() {

            axios.post("http://localhost:4000/shuffule", {
                token: token,
                key: key
            })
            .then(result => {
                if (result.data == 'ok') {
                    swap({
                        text: "Successfully suffule rooms",
                        icon: "success",
                        button: 'Awasome'
                    }).then(res => {
                        if(res){
                            history.push('/studentData')
                        }
                       
                    })

                }
            })
        }
        shuffule_data();    

    }, []);

    // console.log(suffuleData, "Aman")
    return (
        <>
            <AdminNav />
            
            {/* {suffuleData.map((item) => {
                return (

                    <div className="card_data">
                        <img src="..." className="card-img-top" alt="..." />

                        <h5 >{item.firstName} {item.lastName}</h5>
                        <div className="card-body">
                            <p>ContactNo: {item.mobileNo}</p>
                            <p>Email: {item.email}</p>
                            <p>Currunt Bed: {item.Currunt_bed}</p>
                            <p>Currunt Bed Side: {item.CurruntBedside}</p>
                            <p>Currunt Room No: {item.Currunt_roomNo}</p>
                            <p>Previous Bed: {item.Previous_Bed}</p>
                            <p>Previous Bed Side: {item.PreviousSide}</p>
                            <p>Previous Room No: {item.Previous_roomNo}</p>
                        </div>
                    </div>

                )
            })} */}

        </>

    )
}

export default Shuffule;