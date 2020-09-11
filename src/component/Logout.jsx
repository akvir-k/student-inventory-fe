import React from 'react';
import Nav from './Navigation/Nav';

const Logout=()=>{

    localStorage.removeItem('token')
    localStorage.removeItem('key')
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