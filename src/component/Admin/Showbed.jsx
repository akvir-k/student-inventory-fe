import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import AdminNav from '../Navigation/AdminNav';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import { useEffect } from 'react';
import sweet from 'sweetalert';


const ShowBed = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const FetchResponse = async () => {
            await Axios.get('http://localhost:4000/getbed')
                .then(result => {
                    setData(result.data)
                    // console.log(result.data)

                })
        }
        FetchResponse();

    }, [])

    const Delete = async (delete_value) => {

        // console.log(bed)
        let token = localStorage.getItem('token')

        Axios.post("http://localhost:4000/deletebed", {
            bed: delete_value.bed,
            verify: token,
            key: localStorage.getItem('key')
        })
        .then((resp) => {
            console.log(resp)
            if (resp.data==1){
                sweet({
                    text:"Deleted successfully"
                })
                setData((olditems)=>{
                    return olditems.filter((arrElem, index)=>{
                        return index!==delete_value.index
                    });
                });
                
             
            }else{
                sweet({
                    text:"bed does not exit",
                    button:"try again",
                    icon:"warning"
                })
            }
        })

    }


    console.log(data)
    return (
        <>
            <AdminNav />
            <h1>Navgurukul Bed Database</h1>
            {data.map((value, index) => {

                return (
                    <div key={value.bed}className="Main_show">
                        <div className="card" >
                            <img src="beds.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dharmshala Beds: {value.bed}</h5>
                                <p> Bed Side: {value.side}</p>
                                <p> Room No: {value.roomNo}</p>
                                <button className="btn btn-primary"
                                     onClick={() => {
                                        Delete({
                                            bed:value.bed,
                                            index:index
                                        })
                                    }}>  Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}



        </>

    )
}

export default ShowBed;