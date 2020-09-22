import React from 'react';
import Nav from './Navigation/Nav';
import sweet from 'sweetalert';
const Logout=({history})=>{

    sweet({
        text:"logout Successfully",
        button:'Home',
        icon:'success'
    }).then(()=>{

        localStorage.removeItem('token')
        localStorage.removeItem('key')
        history.push('/')
    
    })


    return(
        <>
            <Nav/>
            <div>
                <h3> Logout Successfully</h3>
                    
                <br/>
                
            </div>
        </>
    )
}

export default Logout;