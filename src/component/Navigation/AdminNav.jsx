import React from 'react'
import { NavLink } from 'react-router-dom';


const AdminNav = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row w-100">
                    <div className="col-12.1 w-100 mx-auto">
                        <nav class="navbar navbar-expand-lg navbar-light admin_nav">
                            <a class="navbar-brand" href="#">
                                <img className="navbar-brand-img" src="/navgurukul.png" alt="picture of navgurukul" />
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse admin_nav_text" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto ">
                                    <li class="nav-item active">
                                        <NavLink class="nav-link" to="/admin_home">Home <span class="sr-only">(current)</span></NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/show">ShowBed</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/addbed">Addbed</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/shuffule">Room Suffule</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/studentData">Student Data</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/logout'>Logout</NavLink>
                                    </li>

                                </ul>

                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminNav;