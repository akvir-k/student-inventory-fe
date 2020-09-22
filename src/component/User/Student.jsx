import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StudentNav from '../Navigation/UserNav'


const StudentData = ({ history }) => {

    const [Sdata, Setdata] = useState([]);
    useEffect(() => {
        let getToken = localStorage.getItem('token')
        let getKey = localStorage.getItem('key')
        function fetchData() {
            Axios.post('http://localhost:4000/getStudentData', {
                token: getToken,
                key: getKey
            })
                .then(result => {
                    Setdata(result.data)
                    console.log(result)
                })
        }
        fetchData();


    }, []);


    return (
        <>
            <StudentNav />
            <div className="student_main">
                {Sdata.map((value, index) => {
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
            </div>

        </>
    );
}

export default StudentData;