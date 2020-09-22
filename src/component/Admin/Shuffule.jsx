import React, { useEffect } from 'react';
import swap from 'sweetalert';
import axios from 'axios';
import AdminNav from '../Navigation/AdminNav';
import { useState } from 'react';

const Shuffule = ({history}) => {

    const[suffuleData,setData]=useState("")

    useEffect(() => {

        const token =  localStorage.getItem('token')
        const key =  localStorage.getItem('key')
        async function shuffule_data() {

            await axios.post("http://localhost:4000/shuffule", {
                token: token,
                key: key
            })
            .then(result => {
                if (result.data === 'ok') {
                    swap({
                        text: "Successfully suffule rooms",
                        icon: "success",
                        button: 'Awasome'
                    }).then(res => {
                        // if(res){
                        //     axios.get('http://localhost:4000/getShuffuleData')
                        //     .then(result => {
                        //         setData(result.data)
                        //     })
                             
                          
                        // }
                        setData('1')
                       
                    })
                }else if(result.data=== 'error'){
                    swap({
                        text: "Bed is less then Students",
                        icon: "warning",
                        button: 'Add More Beds'
                    })
                }
            })
        }
        shuffule_data();    

    }, []);

    if (suffuleData==='1'){
        history.push('/studentData')
    }

    // console.log(suffuleData, "Aman")
    return (
        <>
            <AdminNav />
            
            {/* <div className="student_main">
                {suffuleData.map((value, index) => {
                    return (
                        <div key={value.id} className="Student_card_container">

                            <div className="student_img">
                                <img className="pic_student" src={value.image_link} alt="..." />
                            </div>
                            <div className="student_container">
                                <p className="student_text">
                                    <label> Student Name: </label> {value.firstName} {value.lastName}
                                </p>
                                <p className="student_text">
                                    <label> Current Bed: </label> {value.Currunt_bed}
                                </p>
                                <p className="student_text">
                                    <label> Current Side: </label> {value.CurruntBedside}                                  
                                </p>
                                <p className="student_text">
                                    <label> Current Room: </label> {value.Currunt_roomNo}                                   
                                </p>
                                <p className="student_text">
                                    <label> Previous Bed: </label> {value.Previous_Bed}
                                </p>
                                <p className="student_text">
                                    <label> Previous Side: </label> {value.PreviousSide}
                                </p>
                                <p className="student_text">
                                    <label> Previous Room: </label> {value.Previous_roomNo}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div> */}

        </>

    )
}

export default Shuffule;